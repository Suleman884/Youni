import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmptyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Coming soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
});

export default EmptyScreen;
