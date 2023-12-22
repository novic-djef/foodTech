
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { COLORS, FONTS } from '../constants';

export default function TextButton({disabled, onPress, label, labelStyle, contentContainerStyle }) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      backgroundColor: COLORS.primary,
        ...contentContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}
      >
        <Text
        style={{
            color: COLORS.white,
            ...FONTS.h3,
            ...labelStyle,
        }}
        >
        {label}
        </Text>
    </TouchableOpacity>
  );
}


