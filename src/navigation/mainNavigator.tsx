import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Favorites from '../screens/favorites';
import Home from '../screens/home';

// import { Roots } from '@/constants'

// import { headerOptions } from './navigatorOptions'
export type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{title: 'Art Institute of Chicago'}}
      />
      <Stack.Screen
        name={'Favorites'}
        component={Favorites}
        // options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
