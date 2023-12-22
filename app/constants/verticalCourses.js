/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import { Image, TouchableOpacity, View, Text } from 'react-native';

import { IconLabel } from '../components'

import { SIZES, icons, FONTS, COLORS } from '.';

export default function VerticalCourses({containerStyle, course}) {
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
        {/* play */}
        {/* <View
        style={{
          width: 45,
          height: 45,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
          backgroundColor: COLORS.primary,
        }}>

          <Image
            source={icons.play}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
          </View> */}
          {/* Info section */}
             {/* <View
            style={{
              flexShrink: 1,
              paddingHorizontal: SIZES.radius,
            }}>
              <Text
                style={{
                  flex: 1,
                  ...FONTS.h3,
                  fontSize: 18,
                }}
              >
                {course.title}
              </Text>

               <IconLabel
                 icon={ icons.time }
                 label={ course.duration }
                 containerStyle={{
                  marginTop: SIZES.base,
               }}
              />

            </View> */}
      </View>
    </TouchableOpacity>
  );
}


