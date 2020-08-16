import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Loader from '../components/Loader';
import {connect} from 'react-redux';
import {setData} from '../actions';

const MainPage = ({navigation, setData, list}) => {
  const [loading, setLoading] = useState(false);
  const [offSetNumber, setOffSetNumber] = useState(0);

  console.log('list', list);

  useEffect(() => {
    axios
      .get(
        `http://ergast.com/api/f1/drivers.json?&limit=5&offset=${offSetNumber}`,
      )
      .then((res) => {
        setData(res.data.MRData.DriverTable.Drivers), setLoading(true);
      })
      .catch((err) => console.log(err));
  }, [offSetNumber]);

  handleLoadMore = () => {
    setOffSetNumber((prevOffSetNumber) => prevOffSetNumber + 5);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={(item) => item.driverId}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text onPress={() => navigation.navigate('Rider', item)}>
                {item.familyName}
              </Text>
              <Text>{item.givenName}</Text>
              <Text>{item.dateOfBirth}</Text>
              <Text>{item.nationality}</Text>
            </View>
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
        />
      ) : (
        <Loader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  list: {
    flex: 1,
  },
  item: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
});

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
