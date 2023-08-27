import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {typography} from '../styles/typography';
import {colors} from '../styles/colors';
import {exploreData} from '../res/tabsData';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';

const ExploreList = () => {
  const [selectedItem, setSelectedItem] = useState(4);

  const rednerItem = (item, index) => {
    return (
      <View style={[styles.item(selectedItem), {width: null}]}>
        <Text style={styles.title(selectedItem, item.id)}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <HorizontalPicker
        data={exploreData}
        defaultIndex={selectedItem}
        renderItem={rednerItem}
        itemWidth={80}
        onChange={index => setSelectedItem(index)}
        animatedScrollToDefaultIndex={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  item: () => {
    return {
      borderWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 6,
      marginVertical: 8,
      marginHorizontal: 4,
    };
  },
  title: (selectedItem, title) => {
    return {
      ...typography.text16,
      color: selectedItem === title ? colors.white : colors.placeholder,
      fontSize: selectedItem === title ? 20 : 12,
      fontWeight: selectedItem === title ? '700' : '400',
    };
  },
});

export default ExploreList;
