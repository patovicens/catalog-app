import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {Button} from 'react-native';
import Details from '../screens/details';
import Favorites from '../screens/favorites';
import Home from '../screens/home';
import {Artwork} from '../types/Collections';
import {useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Details: {item: Artwork};
  Favorites: undefined;
};

export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = (): JSX.Element => {
  const navigation = useNavigation<StackNavigation>();

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
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Favorites')}
              title="Favs"
              color="#EEEEEE"
            />
          ),
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
