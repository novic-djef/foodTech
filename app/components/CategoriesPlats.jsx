/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import { Image, TouchableOpacity } from 'react-native';


export default function CategoriesPlats({ course}) {
  return (
    <TouchableOpacity
      style={{
        width: 170,
        marginRight: -70, // Supprime la marge droite
      }}>
      <Image
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: '50%',
          height: 80,
          borderRadius: 100,
    

        }}
      />

    </TouchableOpacity>
  );
}


