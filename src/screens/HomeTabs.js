import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HomeScreen from './homeScreen';
import EmptyScreen from './EmptyScreen';
import LocationIcon from '../svgIcons/LocationIcon';
import PeopleIcon from '../svgIcons/PropleIcon';
import AddIcon from '../svgIcons/AddIcon';
import {colors} from '../styles/colors';
import SupportIcon from '../svgIcons/SupportIcon';
import ProfileIcon from '../svgIcons/ProfileIcon';

const Tab = createBottomTabNavigator();

const HomeTabsNames = {
  Events: 'Events',
  People: 'People',
  Add: 'Add',
  Support: 'Support',
  Profile: 'Profile',
};

const getTabBarIconByRouteName = (route, focused) => {
  switch (route.name) {
    case HomeTabsNames.Events:
      return <LocationIcon />;
    case HomeTabsNames.People:
      return <PeopleIcon />;
    case HomeTabsNames.Add:
      return <AddIcon />;
    case HomeTabsNames.Support:
      return <SupportIcon />;
    default:
      return <ProfileIcon />;
  }
};

function HomeTabs() {
  const {tabBarLabelStyle, tabBarStyle} = styles;

  const tabs = [
    <Tab.Screen key="Events" name="Events" component={HomeScreen} />,
    <Tab.Screen key="People" name="People" component={EmptyScreen} />,
    <Tab.Screen key="Add" name="Add" component={EmptyScreen} />,
    <Tab.Screen key="Support" name="Support" component={EmptyScreen} />,
    <Tab.Screen key="Profile" name="Profile" component={EmptyScreen} />,
  ];

  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({focused}) => getTabBarIconByRouteName(route, focused),
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.placeholder,
          tabBarLabelStyle,
          tabBarStyle,
          headerShown: false,
        };
      }}>
      {tabs}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 11,
  },
  tabBarStyle: {
    backgroundColor: colors.black,
    paddingTop: hp(1),
  },
});

export default HomeTabs;
