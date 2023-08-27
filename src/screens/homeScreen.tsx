import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import {baseContainer} from '../styles/ViewStyles';
import {colors} from '../styles/colors';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <HomeHeader title={'Events'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...baseContainer,
    backgroundColor: colors.black,
  },
});

export default HomeScreen;
