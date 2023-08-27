import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {typography} from '../styles/typography';
import {colors} from '../styles/colors';

const TabSwitch = ({isFirstSelected, setIsFirstTabSelected}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsFirstTabSelected(true)}>
        <Text
          style={isFirstSelected ? styles.selectedText : styles.unselectedText}>
          Explore
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsFirstTabSelected(false)}>
        <Text
          style={
            !isFirstSelected ? styles.selectedText : styles.unselectedText
          }>
          For You
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  selectedText: {
    ...typography.display18,
    marginHorizontal: 8,
    color: colors.white,
  },
  unselectedText: {
    ...typography.display18,
    marginHorizontal: 8,
    color: colors.placeholder,
  },
});

export default TabSwitch;
