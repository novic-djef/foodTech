import React from 'react';

import {View} from 'react-native';
import {COLORS} from '../constants';

export default function LineDivider({lineStyle}) {
  return (
    <View
      style={{
        height: 2,
        width: '100%',
        backgroundColor: COLORS.gray20,
        ...lineStyle,
      }}
    />
  );
}
