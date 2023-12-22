/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import { Image, TouchableOpacity, View, Text } from 'react-native';
import { SIZES} from '../constants';

export default function SlideFoods({containerStyle, course}) {
  return (
    <TouchableOpacity
      style={{
        width: 170,
        right: 22,
        ...containerStyle,
      }}>
      <Image
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 100,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,

        }}
      />
      {/* detail section */}
      <View
      style={{
        flexDirection: 'row',
      }}>
      </View>
    </TouchableOpacity>
  );
}


