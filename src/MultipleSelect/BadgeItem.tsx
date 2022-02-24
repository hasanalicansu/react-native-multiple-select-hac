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
}: IBadgeItem) => {
  const badge: { [key: string]: string | number } = findItem(itemKey);

  return (
    <TouchableOpacity
      style={[BadgeStyle.container, badgeStyle]}
      onPress={() => pressItem(badge)}
    >
      <Text adjustsFontSizeToFit style={[BadgeStyle.text, badgeTextStyle]}>
        {badge[displayedObject]}
      </Text>
      {badgeIcon ? (
        badgeIcon
      ) : (
        <Image
          style={[BadgeStyle.cross, crossStyle]}
          source={require('../assets/cross.png')}
        />
      )}
    </TouchableOpacity>
  );
};
