import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const RiderPage = ({navigation}) => {
  console.log('Rider Page');
  console.log('111');

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://banner2.cleanpng.com/20180518/zpc/kisspng-computer-icons-symbol-user-profile-logo-5aff298bbe7138.2291281815266717557801.jpg',
        }}
      />
      <Text>{navigation.getParam('familyName')}</Text>
      <Text>{navigation.getParam('givenName')}</Text>
      <Text>{navigation.getParam('dateOfBirth')}</Text>
      <Text>{navigation.getParam('nationality')}</Text>
    </View>
  );
};

export default RiderPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
});
