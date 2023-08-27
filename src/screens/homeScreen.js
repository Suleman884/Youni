import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import {baseContainer} from '../styles/ViewStyles';
import {colors} from '../styles/colors';
import TabSwitch from '../components/TabSwitch';

const HomeScreen = () => {
  const [isFirstTabSelected, setIsFirstTabSelected] = useState(true);
  return (
    <View style={styles.container}>
      <HomeHeader title={'Events'} />
      <TabSwitch
        isFirstSelected={isFirstTabSelected}
        setIsFirstTabSelected={setIsFirstTabSelected}
      />
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
