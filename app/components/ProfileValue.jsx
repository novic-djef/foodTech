import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { COLORS, SIZES, FONTS, icons } from '../constants'
//import  { connect } from "react-redux";

const ProfileValue = ({ icon, label, value, onpress}) => {
  return (
    <TouchableOpacity
       style={{
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
       }}
       onPress={onpress}
    >
      {/* icon */}

      <View
        style={{
          width:  40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: COLORS.additionalColor11
        }}
      >
        <Image 
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.primary
          }}
        
        />

      </View>
      {/* label et value */}
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.radius
        }}
      >
        {label && 
        <Text 
          style={{
            color: COLORS.gray30,
            ...FONTS.body3
          }}
        >
     {label}
        </Text>
        }
        <Text
           style={{
            color: COLORS.primary,
            ...FONTS.h3
           }}
        >
     {value}
        </Text>

      </View>
      {/* icons */}

      <Image  
      source={icons.right_arrow}
        style={{
          width: 15,
          height: 15,
          tintColor: COLORS.white
        }}
      
      />
    </TouchableOpacity>
  )
}
// function mapStateToProps(state) {
//   return {
//     appTheme: state.appTheme
//   }
// }

// function mapDispatchToProps(dispatch){
//    return{
//    }
// }

export default ProfileValue;
//export default connect( mapStateToProps, mapDispatchToProps) (ProfileValue);


