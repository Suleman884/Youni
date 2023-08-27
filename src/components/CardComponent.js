import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {typography} from '../styles/typography';
import {colors} from '../styles/colors';
import Images from '../assets/Images';
import ForYouList from './ForYouList';
import {cardTags} from '../res/tabsData';
import DisableHeart from '../svgIcons/DisableHeart';
import HeartIcon from '../svgIcons/Heart';

const imagesData = [
  {source: Images.profile1, id: 1},
  {source: Images.profile2, id: 2},
  {source: Images.profile3, id: 3},
];

const Profile = () => {
  let rightForTotal;
  return (
    <View style={styles.profiles}>
      {imagesData.map((item, index) => {
        const right = index * 11;
        rightForTotal = right;
        return (
          <Image key={index} source={item.source} style={{right: right}} />
        );
      })}
      <View style={[styles.totalImages, {right: rightForTotal + 11}]}>
        <Text style={styles.totalText}>+12k</Text>
      </View>
    </View>
  );
};

const CardComponent = ({setIsLoading}) => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={Images.cardImage} />
        <View style={styles.imageLogo}>
          <Image source={Images.imageLogo} />
        </View>
      </View>
      <View style={styles.dataView}>
        <Text style={styles.date}>Wed, Mar 29</Text>
        <View style={styles.dot} />
        <Text style={styles.date}>19:00 - 20:00</Text>
      </View>
      <Text style={styles.cardTitle}>Dinner with Faigrove Partners</Text>
      <ForYouList
        listData={cardTags}
        style={styles.list}
        itemStyle={styles.item}
        setIsLoading={setIsLoading}
      />
      <View style={styles.bottomView}>
        <Profile />
        <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
          {!isFavourite ? <DisableHeart /> : <HeartIcon />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.placeholder,
    borderRadius: 12,
    paddingTop: 12,
    paddingHorizontal: 12,
  },
  image: {
    width: '100%',
  },
  imageLogo: {
    position: 'absolute',
    bottom: 8,
    left: 10,
  },
  dataView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  date: {
    ...typography.text14,
    color: colors.gray,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 3,
    backgroundColor: colors.gray,
    marginHorizontal: 8,
  },
  cardTitle: {
    ...typography.display20,
  },
  list: {
    marginTop: 0,
  },
  item: {
    paddingVertical: 3.5,
  },
  profiles: {
    flexDirection: 'row',
  },
  totalImages: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.youniPink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalText: {
    ...typography.text12,
  },
  bottomView: {
    paddingTop: 5,
    paddingBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CardComponent;
