import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import type { IListItem } from './Interface';
import { ListItemStyle } from './Style';

export const ListItem = ({
  data,
  value,
  pressItem,
  displayedObject,
  uniqueKey,
}: IListItem) => (
  <TouchableOpacity
    style={ListItemStyle.container}
    onPress={() => pressItem(data)}
  >
    <Text style={ListItemStyle.text}>{data[displayedObject]}</Text>
    {value?.includes(data[uniqueKey]) && (
      <Image
        style={ListItemStyle.checkImage}
        source={require('../assets/check.png')}
      />
    )}
  </TouchableOpacity>
);
