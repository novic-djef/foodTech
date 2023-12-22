import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React, { useRef } from 'react'
import 
   Animated, { 
  withTiming, 
  withDelay, 
  useSharedValue, 
  //useAnimatedStyle, 
  //runOnJS, 
  useAnimatedScrollHandler,
  // interpolate,
  // Extrapolate,
} from 'react-native-reanimated';
import  BottomSheet  from 'react-native-raw-bottom-sheet';
import { IconsButton, HorizontalCourses, LineDivider, FilterModal } from '../../components';
import { COLORS, FONTS, SIZES, images, icons, dummyData } from '../../constants';
import { SharedElement } from 'react-navigation-shared-element';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const HEADER_HEIGHT = 250;

const ListeCours = ({navigation, route}) => {

const headerShareValue = useSharedValue(80)
const filterModalSharedValue1 = useSharedValue(SIZES.height)
const filterModalSharedValue2 = useSharedValue(SIZES.height)



  function BackHandler() {
    navigation.goBack()
  }



  const {category, sharedElementPrefix} = route.params;
  // render

const flatListRef = useRef()
const scrollY = useSharedValue(0)
const onScroll = useAnimatedScrollHandler((event) => {
  scrollY.value = event.contentOffset.y;
})


  function renderHeader() {

    // headerSharedValue.value = withDelay(500,
    //   withTiming(0, {
    //     duration: 500
    //   }))

      // const headerFadeAnimatedStyle = useAnimatedStyle(() =>{
      //   return {
      //     opacity: interpolate(headerShareValue.value,
      //       [80, 0], [0, 1])
      //   }
      // })


    // const headerTranslateAnimatedStyle = useAnimatedStyle(
    //   () => {
    //     return {
    //       transform: [
    //        {
    //         translateY: headerSharedValue.value
    //        }
    //       ]
    //     }
    //   }
    // )

    return(
      <Animated.View
       style={{
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        height: 250,
        overflow: "hidden",
       }}
      >
        <SharedElement 
          id={`${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`}
          style={[StyleSheet.absoluteFillObject]}
        >
          <Image 
           source={category?.thumbnail}
           resizeMode="cover"
            style={{
              height: "100%",
              width: "100%",
              borderBottomLeftRadius: 60,
            }}
          />


        </SharedElement>
        
        {/* titre */}
        <Animated.View
        style={{
          position: "absolute",
          bottom: 70,
          left: 30
        }}
        >
          <SharedElement
          id={`${sharedElementPrefix}-CategoryCard-title-${category?.id}`}
          style={[StyleSheet.absoluteFillObject]}
          >
            <Text
            style={{
              position: "absolute",
              color: COLORS.white,
              ...FONTS.h1
            }}
            >
              {category?.title}
            </Text>
          </SharedElement>
        </Animated.View>

{/* back button */}

<Animated.View 
  //style={headerFadeAnimatedStyle}

>
         <IconsButton 
           icon={icons.back}
           iconStyle={{
            tintColor: COLORS.black
           }}
           containerStyle={{
            position: "absolute",
            top: 40,
            left: 20,
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            backgroundColor: COLORS.white,

           }}
         onPress={() =>{BackHandler()}}
         
         />
        </Animated.View>

         {/* category image component */}

         <Animated.Image
           source={images.mobile_image}
           resizeMode="contain"
           style={{
            position: "absolute",
            right: 40,
            bottom: -40,
            width: 100,
            height:200,

           }}
         
         ></Animated.Image>

      </Animated.View>
    )
  }

  function renderResult({}) {
  const selectedRestaurant = useSelector(
    (state) => state.restaurantReducer.selectedRestaurant
  );
    return(
      <><AnimatedFlatList
        ref={flatListRef}
        data={selectedRestaurant}
        keyExtractor={item => `Results-${item.id}`}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          marginTop: -250,
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag"
        onScroll={onScroll}
        ListHeaderComponent={<View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 270,
            marginBottom: SIZES.base
          }}

        >
          {/* result */}
          <Text
            style={{
              flex: 1,
              ...FONTS.body3
            }}
          >
            853 Resultats

          </Text>

          {/* filter button */}
    
          <IconsButton
            icon={icons.filter}
            iconStyle={{
              width: 20,
              height: 20,
            }}
            containerStyle={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              backgroundColor: COLORS.primary
            }}
            onPress={() => { 
              filterModalSharedValue1.value 
              = withTiming(0, {
               duration: 100
              })
              filterModalSharedValue2.value 
              = withDelay(100, 
                withTiming(0, { 
                 duration: 500
                })
               )
            } } />

        </View>}
        renderItem={({ item, index }) => (
          <HorizontalCourses
            course={item}
            containerStyle={{
              marginVertical: SIZES.padding,
              marginTop: index == 0 ? SIZES.radius : SIZES.padding
            }}
            onPress={() => navigation.navigate("DetailCours", { selectedCourse: item })} />
        )}
        ItemSeparatorComponent={() => (
          <LineDivider
            lineStyle={{
              backgroundColor: COLORS.gray20
            }} />
        )} />
       </>   
    )
  }

// function renderModal() {
//   return(
//     <Animated.View
//     style={{
//       position: "absolute",
//       bottom: 0,
//       height: SIZES.height,
//       width: COLORS.width
//     }}
//   >
//   {/* bacground */}
//   <Animated.View
//    style={{
//     flex: 1,
//     height: SIZES.height,
//     width: COLORS.width,
//     backgroundColor: COLORS.transparentBlack7
//   }}
//   >



//   {/* content container */}
//   <Animated.View
//    style={{
//     position: "absolute",
//     bottom: 0,
//     height: SIZES.height * 0.9,
//     width: COLORS.width,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     backgroundColor: COLORS.white
//    }}
//   >

//   </Animated.View>
//   </Animated.View>
// </Animated.View>
//   )
// }


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >



      {/* header */}
      {renderHeader()}
      {/* result */}
     {renderResult()}

     {/* filter modal */}
       <FilterModal  
       filterModalSharedValue1={filterModalSharedValue1}
       filterModalSharedValue2={filterModalSharedValue2}
       />  

       {/* {renderModal()}  */}
  
   </View>
  )
}
const styles = StyleSheet.create({

})

ListeCours.sharedElements = (route, otherRoute, showing) => {
  if(otherRoute.name === 'CoursStack'){
   const {category, sharedElementPrefix } = route.params;

  return [
    {
      id: `${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`
    },
    {
      id: `${sharedElementPrefix}-CategoryCard-Title-${category?.id}`
    }
  ]
}
}
export default ListeCours