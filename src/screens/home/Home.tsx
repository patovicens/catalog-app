import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';

import appClient from '../../clients/appClient';
import ArtworkItem from '../../components/artworkItem';
import {Artwork} from '../../types/Collections';
import styles from './styles';

const Home = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(6);

  useEffect(() => {
    const fetchArtworks = async () => {
      setIsLoading(true);
      try {
        const response = await appClient.getArtworks(currentPage, 10);
        setArtworks(a => [...a, ...response.data]);
      } catch (err) {
        // show toast error
      }
      setIsLoading(false);
    };

    fetchArtworks();
  }, [currentPage]);

  const fetchMoreData = async () => {
    setCurrentPage(currentPage + 1);
  };

  const renderItem = ({item}: {item: Artwork}) => {
    return <ArtworkItem item={item} />;
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}
      <FlatList
        data={artworks}
        renderItem={renderItem}
        onEndReached={() => fetchMoreData()}
      />
    </View>
  );
};

export default Home;
