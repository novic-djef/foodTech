import { View, Text, Image, TouchableOpacity, ScrollView, Animated  } from 'react-native'
import React from 'react'

import { TextBotton, LineDivider } from '../components'

import { COLORS, FONTS, SIZES, icons, constants } from '../constants'
const FilterModal = ({FilterModalSharedValue1, FilterModalSharedValue2}) => {

//   const filterModalContainerAnimatedStyle = useAnimatedStyle(() => {
//     return {
//       opacity: interpolate(FilterModalSharedValue1.value, 
//         [SIZES.height, 0], [0, 1]),
//         transformY: [
//           {
//             transform: filterModalSharedValue1.value
//           }
//         ]
//     }
//   })
// const filterModalBgAnimatedStyle = useAnimatedStyle(() => {
//   return {
//     opacity: interpolate(FilterModalSharedValue2.value, 
//       [SIZES.height, 0], [0, 1]),
//       transformY : FilterModalSharedValue2.value
//   }
// })

  return (
    // container
  <Animated.View
    style={[{
      position: "absolute",
      bottom: 0,
      height: SIZES.height,
      width: COLORS.width
    }, 
    //filterModalContainerAnimatedStyle
  ]}
  >
  {/* background */}
  <Animated.View
   style={[{
    flex: 1,
    height: SIZES.height,
    width: COLORS.width,
    backgroundColor: COLORS.transparentBlack7
  }, 
  //filterModalBgAnimatedStyle
]}
  >



  {/* content container */}
    <Animated.View
    style={[{
      position: "absolute",
      bottom: 0,
      height: SIZES.height * 0.9,
      width: COLORS.width,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: COLORS.white
    }, 
    //filterModalContainerAnimatedStyle
  ]}  
    >

    </Animated.View>
  </Animated.View>
</Animated.View>
  )
}

export default FilterModal