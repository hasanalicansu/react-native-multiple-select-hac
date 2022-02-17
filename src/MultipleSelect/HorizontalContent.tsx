import { Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { HorizontalStyle } from './Style';
import type { IHorizontal } from './Interface';
import { BadgeItem } from './BadgeItem';

export const HorizontalContent = ({
  value,
  placeholder,
  open,
  setOpen,
  displayedObject,
  findItem,
  pressItem,
  contentStyle,
  placeholderStyle,
  badgeTextStyle,
  crossStyle,
  badgeIcon,
}: IHorizontal) => {
  return (
    <TouchableOpacity
      onPress={() => setOpen(!open)}
      style={[HorizontalStyle.container, contentStyle]}
    >
      {value !== undefined && value.length > 0 ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {value.map((itemKey, index) => (
            <BadgeItem
              key={index}
              itemKey={itemKey}
              pressItem={pressItem}
              findItem={findItem}
              displayedObject={displayedObject}
              badgeStyle={{}}
              badgeTextStyle={badgeTextStyle}
              crossStyle={crossStyle}
              badgeIcon={badgeIcon}
            />
          ))}
        </ScrollView>
      ) : (
        <Text style={[HorizontalStyle.placeholder, placeholderStyle]}>
          {placeholder}
        </Text>
      )}
    </TouchableOpacity>
  );
};
