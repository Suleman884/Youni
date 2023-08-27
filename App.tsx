import React from 'react';
import GeneralAppStack from './src/routes/general';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <NavigationContainer>
        <GeneralAppStack />
      </NavigationContainer>
    </>
  );
};

export default App;
