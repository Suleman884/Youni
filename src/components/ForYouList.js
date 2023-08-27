import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {typography} from '../styles/typography';
import {colors} from '../styles/colors';
import {ForYouData} from '../res/tabsData';

export const Item = ({
  title,
  index,
  setSelectedIndex,
  selectedItem,
  setSelectedItem,
  itemStyle,
  setIsLoading,
}) => {
  return (
    <TouchableOpacity
      style={[styles.item(selectedItem, title), itemStyle]}
      onPress={() => {
        setSelectedItem(title);
        setSelectedIndex(index);
        setIsLoading(true);
      }}>
      <Text style={styles.title(selectedItem, title)}>{title}</Text>
    </TouchableOpacity>
  );
};

const ForYouList = ({listData, style, itemStyle, setIsLoading}) => {
  const scrollRef = useRef();
  const [selectedItem, setSelectedItem] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    ForYouData?.forEach((_element, index) => {
      if (index === selectedIndex) {
        scrollRef.current.scrollToIndex({
          animated: true,
          index: index,
        });
      }
    });
  }, [selectedIndex, selectedItem]);

  return (
    <SafeAreaView style={[styles.container, style]}>
      <FlatList
        ref={scrollRef}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 200));
          wait.then(() => {
            scrollRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={listData}
        renderItem={({item, index}) => (
          <Item
            title={item.title}
            index={index}
            setSelectedIndex={setSelectedIndex}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            itemStyle={itemStyle}
            setIsLoading={setIsLoading}
          />
        )}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  item: (selectedItem, title) => {
    return {
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 6,
      marginVertical: 8,
      marginHorizontal: 4,
      borderColor: colors.placeholder,
      borderRadius: 20,
      backgroundColor: selectedItem === title ? colors.white : null,
    };
  },
  title: (selectedItem, title) => {
    return {
      ...typography.text16,
      color: selectedItem === title ? colors.black : colors.placeholder,
    };
  },
});

export default ForYouList;
