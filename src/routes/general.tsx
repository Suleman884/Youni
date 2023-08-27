import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import {StackNavigationOptions} from '@react-navigation/stack/lib/typescript/src/types';

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
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
    </AppStack.Navigator>
  );
};

export default GeneralAppStack;
