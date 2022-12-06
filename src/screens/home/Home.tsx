import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, View} from 'react-native';

import appClient from '../../clients/appClient';
import ArtworkItem from '../../components/artworkItem';
import {RootStackParamList} from '../../navigation/mainNavigator';
import {Artwork} from '../../types/Collections';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Home = ({navigation}: Props) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  const fetchArtworks = async () => {
    try {
      const response = await appClient.getArtworks();
      setArtworks(response.data);
    } catch (err) {
      // show toast error
    }
  };

  useEffect(() => {
    fetchArtworks();
  }, []);

  const renderItem = ({item}: {item: Artwork}) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <ArtworkItem title={'RANDOM TITLE YOO'} />
      <FlatList data={artworks} renderItem={renderItem} />

      <Button
        title="Go to Favorites"
        onPress={() => navigation.navigate('Favorites')}
      />
    </View>
  );
};

export default Home;
