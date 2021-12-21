import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Homepage from './screens/homepage';
import CardPage from './screens/cardpage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="CardPage" component={CardPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
