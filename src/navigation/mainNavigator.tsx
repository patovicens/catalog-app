import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Details from '../screens/details';
import Favorites from '../screens/favorites';
import Home from '../screens/home';
import {Artwork} from '../types/Collections';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

export type RootStackParamList = {
  Home: undefined;
  Details: {item: Artwork};
  Favorites: undefined;
};

export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = (): JSX.Element => {
  const navigation = useNavigation<StackNavigation>();

  const headerRight = () => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Favorites')}>
      <Image style={styles.icon} source={require('../images/favorite.png')} />
    </TouchableOpacity>
  );

  const headerOptions = (
    title?: string | (() => void),
    showRightIcon?: boolean,
  ): Record<string, unknown> => ({
    headerTitle: title,
    headerTitleAlign: 'center',
    headerTintColor: '#EEEEEE',
    headerStyle: {backgroundColor: '#393E46'},
    headerRight: showRightIcon ? headerRight : () => <View />,
  });

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={headerOptions('Art Institue of Chicago', true)}
      />
      <Stack.Screen
        name={'Favorites'}
        component={Favorites}
        options={headerOptions('Favorites')}
      />
      <Stack.Screen
        name={'Details'}
        component={Details}
        options={headerOptions('Artwork Details')}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
