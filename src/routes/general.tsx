import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigationOptions} from '@react-navigation/stack/lib/typescript/src/types';
import HomeTabs from '../screens/HomeTabs';

type AppStackParamList = {
  HomeScreen: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();

interface GeneralAppStackProps {
  screenOptions?: StackNavigationOptions;
}

const GeneralAppStack: React.FC<GeneralAppStackProps> = ({screenOptions}) => {
  return (
    <AppStack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{headerShown: false, ...screenOptions}}>
      <AppStack.Screen name="HomeScreen" component={HomeTabs} />
    </AppStack.Navigator>
  );
};

export default GeneralAppStack;
