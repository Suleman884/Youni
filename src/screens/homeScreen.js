import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import {baseContainer} from '../styles/ViewStyles';
import {colors} from '../styles/colors';
import TabSwitch from '../components/TabSwitch';
import ForYouList from '../components/ForYouList';
import CardComponent from '../components/CardComponent';
import {ForYouData, exploreData} from '../res/tabsData';
import ExploreList from '../components/ExploreList';

const HomeScreen = () => {
  const [isFirstTabSelected, setIsFirstTabSelected] = useState(true);
  return (
    <View style={styles.container}>
      <HomeHeader title={'Events'} />
      <TabSwitch
        isFirstSelected={isFirstTabSelected}
        setIsFirstTabSelected={setIsFirstTabSelected}
      />
      {isFirstTabSelected ? (
        <ExploreList listData={exploreData} />
      ) : (
        <ForYouList listData={ForYouData} />
      )}
      <CardComponent />
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
