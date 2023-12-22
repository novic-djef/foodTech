import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES} from '../constants';
import { SharedElement } from 'react-navigation-shared-element';

export default function CategoriesCard({sharedElementPrefix, category, containerStyle, onPress}) {
  
   const navigation = useNavigation()
  return (
    <TouchableOpacity
    style={{
      height: 150,
      width: 200,
      ...containerStyle
      
    }}
    onPress={onPress}
    >
      <SharedElement
        id={`${sharedElementPrefix}-CategoryCard-${category?.id}`}
        style={[StyleSheet.basoluteFillObject]}
        
      >
      <Image 
      source={category?.thumbnail}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: SIZES.radius,

      }}
      
      />
      </SharedElement>

     {/* title */}
  <View 
  style={{
     position: "absolute",
     bottom: 50,
     left: 5
  }}>
    <SharedElement
    id={`${sharedElementPrefix}-CategoryCard-title-${category?.id}`}
    style={[StyleSheet.basoluteFillObject]}
    >
    <Text
      style={{
        position: "absolute",
        color: COLORS.white,
        ...FONTS.h2,
        bottom: 10,
        left: 16
        
        
        
      }}
    >
      {category?.title}
    </Text>
    </SharedElement>
  </View>


    </TouchableOpacity>
  );
}
