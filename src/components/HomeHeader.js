import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {typography} from '../styles/typography';
import DisableHeart from '../svgIcons/DisableHeart';
import SearchIcon from '../svgIcons/SearchIcon';
import MenuIcon from '../svgIcons/MenuIcon';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const HomeHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <View style={styles.topRight}>
        <DisableHeart />
        <SearchIcon />
        <MenuIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topRight: {
    flexDirection: 'row',
    width: wp(24),
    justifyContent: 'space-between',
  },
  textTitle: {
    ...typography.display24,
  },
});

export default HomeHeader;
