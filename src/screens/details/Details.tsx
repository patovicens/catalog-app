import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import config from '../../config';
import {RootStackParamList} from '../../navigation/mainNavigator';
import styles from './styles';

type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

type Props = {
  navigation: ScreenNavigationProp;
  route: RouteProp<RootStackParamList, 'Details'>;
};

const Details = ({navigation, route}: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const {item} = route.params;

  const storeData = async (value: number) => {
    let data = await AsyncStorage.getItem('@storage_Key');
    let arr = JSON.parse(data as any);

    if (!isFavorite) {
      arr ? arr.push(value) : (arr = [value]);
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(arr));
      setIsFavorite(true);
    } else {
      const filteredArr = arr.filter((x: number) => {
        return x !== value;
      });
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(filteredArr));
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key');
        if (value !== null) {
          let arr = JSON.parse(value);
          const found = arr.find((element: number) => element === item.id);
          if (found) {
            setIsFavorite(true);
          }
        }
      } catch (e) {
        // error reading value
      }
    };

    getData();
    // const clearAll = async () => {
    //   try {
    //     await AsyncStorage.clear();
    //   } catch (e) {
    //     // clear error
    //   }

    //   console.log('Done.');
    // };

    // clearAll();
  }, [item.id]);

  const url = `${config.IIIF_BASE_URL}/${item.image_id}/full/843,/0/default.jpg`;

  const favoriteIcon = isFavorite
    ? require('../../images/heart-fill.png')
    : require('../../images/heart-empty.png');

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.favoriteIcon}
        onPress={() => storeData(item.id)}>
        <Image style={styles.icon} source={favoriteIcon} />
      </TouchableOpacity>
      <View>
        <Image style={styles.image} source={{uri: url}} />
      </View>
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>
      <Text style={styles.description}>{item.artist_display}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>Artwork Type: </Text>
        <Text style={styles.description}>{item.artwork_type_title}</Text>
        <Text style={styles.subtitle}>Actual Dimensions: </Text>
        <Text style={styles.description}>{item.dimensions}</Text>
        <Text style={styles.subtitle}>Finished Date: </Text>
        <Text style={styles.description}>{item.date_end}</Text>
        <Text style={styles.subtitle}>Materials Used: </Text>
        <Text style={styles.description}>{item.medium_display}</Text>
        <Text style={styles.subtitle}>Public Domain? </Text>
        <Text style={styles.description}>
          {item.is_public_domain ? 'Yes' : 'No'}
        </Text>
        <Text style={styles.subtitle}>Is it on Display? </Text>
        <Text style={styles.description}>{item.is_on_view ? 'Yes' : 'No'}</Text>
        <Button
          title="Go to Favorites"
          onPress={() => navigation.navigate('Favorites')}
        />
      </View>
    </ScrollView>
  );
};

export default Details;
