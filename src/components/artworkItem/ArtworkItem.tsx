import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  title: string;
};

const ArtworkItem = ({title}: Props) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default ArtworkItem;
