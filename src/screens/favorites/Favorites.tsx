import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

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
        Toast.show({
          type: 'error',
          text1: 'Error loading data!',
        });
      }
    };

    getData();
  }, [favorites]);

  const renderItem = ({item}: {item: Artwork}) => {
    return <ArtworkItem item={item} />;
  };

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorites yet, add some!</Text>
        </View>
      ) : (
        <FlatList data={favorites} renderItem={renderItem} />
      )}
    </View>
  );
};

export default Favorites;
