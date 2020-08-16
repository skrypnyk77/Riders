import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
