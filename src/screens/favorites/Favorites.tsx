import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ArtworkItem from '../../components/artworkItem';
import {Artwork} from '../../types/Collections';
import styles from './styles';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@favorites');
        if (value !== null) {
          let arr = JSON.parse(value);
          setFavorites(arr);
        }
      } catch (e) {
        // error reading value
      }
    };

    getData();
  }, [favorites]);

  const renderItem = ({item}: {item: Artwork}) => {
    return <ArtworkItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={favorites} renderItem={renderItem} />
    </View>
  );
};

export default Favorites;
