import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import type { IVertical } from './Interface';
import { VerticalStyle } from './Style';
import { BadgeItem } from './BadgeItem';

export const VerticalContent = ({
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
  verticalMaxHeight,
  colorScheme,
}: IVertical) => {
  return (
    <View
      style={[
        VerticalStyle.container,
        { backgroundColor: colorScheme.bg, borderColor: colorScheme.border },
        contentStyle,
      ]}
    >
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text
          style={[
            VerticalStyle.placeholder,
            { color: colorScheme.text2 },
            placeholderStyle,
          ]}
        >
          {placeholder}
        </Text>
      </TouchableOpacity>
      <View
        style={[VerticalStyle.line, { backgroundColor: colorScheme.border }]}
      />
      <ScrollView style={{ maxHeight: verticalMaxHeight }}>
        <View style={VerticalStyle.scrollContent}>
          {value?.map((itemKey, index) => (
            <BadgeItem
              key={index}
              itemKey={itemKey}
              pressItem={pressItem}
              findItem={findItem}
              displayedObject={displayedObject}
              badgeStyle={VerticalStyle.badgeStyleVertical}
              badgeTextStyle={badgeTextStyle}
              crossStyle={crossStyle}
              badgeIcon={badgeIcon}
              colorScheme={colorScheme}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
