import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import {baseContainer} from '../styles/ViewStyles';
import {colors} from '../styles/colors';
import TabSwitch from '../components/TabSwitch';
import ForYouList from '../components/ForYouList';
import CardComponent from '../components/CardComponent';
import {ForYouData, exploreData} from '../res/tabsData';
import ExploreList from '../components/ExploreList';
import {LoadingIndicator} from '../components/LoadingIndicator';

const HomeScreen = () => {
  const [isFirstTabSelected, setIsFirstTabSelected] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);
  return (
    <View style={styles.container}>
      <LoadingIndicator isLoading={isLoading} />
      <HomeHeader title={'Events'} />
      <TabSwitch
        isFirstSelected={isFirstTabSelected}
        setIsFirstTabSelected={setIsFirstTabSelected}
      />
      {isFirstTabSelected ? (
        <ExploreList listData={exploreData} />
      ) : (
        <ForYouList listData={ForYouData} setIsLoading={setIsLoading} />
      )}
      <View style={styles.shadow}>
        <CardComponent setIsLoading={setIsLoading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...baseContainer,
    backgroundColor: colors.black,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});

export default HomeScreen;
