import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import type { IBadgeItem } from './Interface';
import { BadgeStyle } from './Style';

export const BadgeItem = ({
  itemKey,
  pressItem,
  findItem,
  displayedObject,
  badgeStyle,
  badgeIcon,
  crossStyle,
  badgeTextStyle,
  colorScheme,
}: IBadgeItem) => {
  const badge: { [key: string]: string | number } = findItem(itemKey);

  return (
    <TouchableOpacity
      style={[
        BadgeStyle.container,
        { backgroundColor: colorScheme.badge },
        badgeStyle,
      ]}
      onPress={() => pressItem(badge)}
    >
      <Text
        adjustsFontSizeToFit
        style={[BadgeStyle.text, { color: colorScheme.text }, badgeTextStyle]}
      >
        {badge[displayedObject]}
      </Text>
      {badgeIcon ? (
        badgeIcon
      ) : (
        <Image
          style={[
            BadgeStyle.cross,
            { tintColor: colorScheme.primary },
            crossStyle,
          ]}
          source={require('../assets/cross.png')}
        />
      )}
    </TouchableOpacity>
  );
};
