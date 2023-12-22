
import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import {COLORS} from '../constants';
export default function IconsButton({containerStyle, icon, iconStyle, onPress}) {
  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMode="contain"

        style={{
          width: 25,
          height: 25,
          tintColor: COLORS.white,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

