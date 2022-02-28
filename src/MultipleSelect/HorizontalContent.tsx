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
  colorScheme,
}: IHorizontal) => {
  return (
    <TouchableOpacity
      onPress={() => setOpen(!open)}
      style={[
        HorizontalStyle.container,
        { backgroundColor: colorScheme.bg, borderColor: colorScheme.border },
        contentStyle,
      ]}
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
              colorScheme={colorScheme}
            />
          ))}
        </ScrollView>
      ) : (
        <Text
          style={[
            HorizontalStyle.placeholder,
            { color: colorScheme.text2 },
            placeholderStyle,
          ]}
        >
          {placeholder}
        </Text>
      )}
    </TouchableOpacity>
  );
};
