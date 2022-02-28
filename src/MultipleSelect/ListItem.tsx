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
  parent,
  isItParent,
  categorySelectable,
  colorScheme,
}: IListItem) => (
  <TouchableOpacity
    style={[
      ListItemStyle.container,
      isItParent && parent !== undefined && ListItemStyle.marginParent,
    ]}
    onPress={() =>
      isItParent && parent !== undefined
        ? categorySelectable
          ? pressItem(data)
          : null
        : pressItem(data)
    }
  >
    <Text
      style={
        isItParent && parent !== undefined
          ? [ListItemStyle.parentText, { color: colorScheme.text }]
          : [ListItemStyle.text, { color: colorScheme.text }]
      }
    >
      {data[displayedObject]}
    </Text>
    {value?.includes(data[uniqueKey]) && (
      <Image
        style={[ListItemStyle.checkImage, {tintColor: colorScheme.text}]}
        source={require('../assets/check.png')}
      />
    )}
  </TouchableOpacity>
);
