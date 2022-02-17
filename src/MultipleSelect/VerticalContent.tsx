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
}: IVertical) => {
  return (
    <View style={[VerticalStyle.container, contentStyle]}>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text style={[VerticalStyle.placeholder, placeholderStyle]}>
          {placeholder}
        </Text>
      </TouchableOpacity>
      <View style={VerticalStyle.line} />
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
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
