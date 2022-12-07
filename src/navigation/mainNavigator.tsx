import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Details from '../screens/details';
import Favorites from '../screens/favorites';
import Home from '../screens/home';
import {Artwork} from '../types/Collections';

export type RootStackParamList = {
  Home: undefined;
  Favorites: undefined;
  Details: {item: Artwork};
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
        options={{
          title: 'Art Institute of Chicago',
          headerStyle: {backgroundColor: '#393E46'},
          headerTintColor: '#EEEEEE',
        }}
      />
      <Stack.Screen
        name={'Favorites'}
        component={Favorites}
        options={{
          headerStyle: {backgroundColor: '#393E46'},
          headerTintColor: '#EEEEEE',
        }}
      />
      <Stack.Screen
        name={'Details'}
        component={Details}
        options={{
          title: 'Artwork Details',
          headerStyle: {backgroundColor: '#393E46'},
          headerTintColor: '#EEEEEE',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
