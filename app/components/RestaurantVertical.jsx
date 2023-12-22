/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet, Animated, Alert } from 'react-native';

import { IconLabel } from '.'
import Icon from 'react-native-vector-icons/Feather';
import { SIZES, icons, FONTS, COLORS, } from '../constants';
import LottieView from 'lottie-react-native';


import Toast from 'react-native-toast-message'

export default function RestaurantVertical({containerStyle, course}) {

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "message",
      text2: "conteneu de la notifications",
      autoHide: true,
      visibilityTime: 2500,
      position: "top",
      bottomOffset: 50,
    
    })
  }

  return (
   <>
   <View style={{
    border: 2,
    borderBlockColor: 'red'
   }}>
   <View
      style={{
        width: 230,
        right: 22,
        ...containerStyle,
        }}>
      <Image
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 150,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,

        }}
      />

      {/* detail section */}
     
        <View
            style={{
              flexShrink: 1,
              paddingHorizontal: SIZES.radius,
              flexDirection: 'row'
            }}>
              <Text
                style={{
                  flex: 1,
                  ...FONTS.h3,
                  fontSize: 18,
                  fontWeight:700,
                }}
              >
                {course.name}
              </Text>
              <TouchableOpacity
                            style={{
                                marginLeft: -12
                            }}
                            // onPress={() =>
                            //   exists(item)
                            //     ? handleRemoveFavorite(item)
                            //     : handleAddFavorite(item)
                            // }
                      onPress={showToast}
                        >
           
                <View style={{marginTop: -30, marginLeft: 20}}>
                    <LottieView
                        style={styles.lottie}
                        source={require("../../assets/json/addToFovotite.json")}
                        autoPlay
                        loop
                    />
                </View> 
                {/* <Animated.View style={[styles.heartContainer]}>
                  <Icon
                  name='heart'
                  color='#000' size={35}  />
                </Animated.View> */}
              
              </TouchableOpacity>
        </View>
         
          {/* Info section */}
          <View
      style={{
        flexDirection: 'row',
      }}>
             <View
            style={{
              flexShrink: 1,
              paddingHorizontal: SIZES.radius,
            }}>
      
              <IconLabel
                 icon={ icons.userplace }
                 label={course.location}
                 containerStyle={{
                  marginTop: SIZES.base,
               }}
              />
             
             <View
      style={{
        flexDirection: 'row',
      }}>
               <IconLabel
                 icon={ icons.star }
                 label={course.rating}
                 containerStyle={{
                  marginTop: SIZES.base,
               }}
              />
              <Text
              style={{
                fontSize: SIZES.h3,
                marginTop: SIZES.base,
                marginLeft: 60
              }}
              >{course.quartier}</Text>
              </View>

            </View>
      </View>
    </View>
   </View>
   </>
  );
}

export const styles = StyleSheet.create({
  heartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 68,
    height: 68
},
})


