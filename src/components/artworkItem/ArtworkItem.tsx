import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './styles';
import config from '../../config';
import {useNavigation} from '@react-navigation/native';
import {Artwork} from '../../types/Collections';
import {StackNavigation} from '../../navigation/mainNavigator';

type Props = {
  item: Artwork;
};

const ArtworkItem = ({item}: Props) => {
  const navigation = useNavigation<StackNavigation>();

  const url = `${config.IIIF_BASE_URL}/${item.image_id}/full/200,/0/default.jpg`;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('Details', {item})}
      style={styles.container}>
      {item.image_id ? (
        <Image style={styles.image} source={{uri: url}} />
      ) : (
        <Image
          style={styles.placeholder}
          source={require('../../images/placeholder.png')}
        />
      )}
      <View style={styles.detailsContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.description}>{item.artist_display}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArtworkItem;
