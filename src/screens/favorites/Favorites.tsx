import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

import ArtworkItem from '../../components/artworkItem';
import {RootStackParamList} from '../../navigation/mainNavigator';

// type ProfileScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'Home'
// >;

// type Props = {
//   navigation: ProfileScreenNavigationProp;
// };

const Favorites = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ArtworkItem title={'RANDOM TITLE YOO FAVORITES'} />
      {/* <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </View>
  );
};

export default Favorites;
