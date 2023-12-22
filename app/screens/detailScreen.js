
  import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ImageBackground,  } from 'react-native'
  import React, { useEffect, useRef } from 'react'
  import { useSelector } from 'react-redux';
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
  
  import { IconsButton, HorizontalCourses, LineDivider, FilterModal, IconLabel } from '../components';
  import { COLORS, FONTS, SIZES, images, icons, dummyData, data } from '../constants';
  import { SharedElement } from 'react-navigation-shared-element';
   import  BottomSheet  from 'react-native-raw-bottom-sheet';
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)
  
  const HEADER_HEIGHT = 250;
  
  const RestaurantDetail = ({route, navigation, item}) => {
  const {restaurant} = route.params;
    useEffect(() => {

    }, [])
    const bottomSheetRef = useRef(null);
  const headerShareValue = useSharedValue(80)
  const filterModalSharedValue1 = useSharedValue(SIZES.height)
  const filterModalSharedValue2 = useSharedValue(SIZES.height)
  
  
    function BackHandler() {
      navigation.goBack()
    }
  
  
  
   // const { sharedElementPrefix} = route.params;
    // render
  
  const flatListRef = useRef()
  const scrollY = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  })
  
  const handlePlatSelect = (plat) => {
    navigation.navigate("detailPlat", {plat})
  };
  
    function renderHeader({item}) {
  
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
            //id={`${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`}
           style={[StyleSheet.absoluteFillObject]}
         >
           <Image 
           source={restaurant.thumbnail}
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
            // id={`${sharedElementPrefix}-CategoryCard-title-${category?.id}`}
            style={[StyleSheet.absoluteFillObject]}
            >
              <Text
              style={{
                position: "absolute",
                color: COLORS.white,
                ...FONTS.h1
              }}
              >
                {restaurant.name}
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
  
    function renderResult() {
 
      return(
        <><AnimatedFlatList
          ref={flatListRef}
          data={restaurant.plats}
          keyExtractor={plat => `Plat-${plat.id}`}
          contentContainerStyle={{
            paddingHorizontal: SIZES.padding,
            marginTop: -250,
          }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          keyboardDismissMode="on-drag"
          onScroll={onScroll}
          ListHeaderComponent={
          <View
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
                 bottomSheetRef.current.open()
              } } />

          </View>
          }
          renderItem={({ item: plat }) => (
            <>

              <TouchableOpacity
                key={plat.id}
                style={{
                  flexDirection: 'row',
                  //...containerStyle,
                }}
                onPress={() => {
                  handlePlatSelect(plat)
                } }
              >
                {/* thumbnail */}
                <ImageBackground
                  source={plat.thumbnail}
                  resizeMode="cover"
                  style={{
                    width: 130,
                    height: 130,
                    marginBottom: SIZES.radius,
                  }}
                  imageStyle={{
                    borderRadius: SIZES.radius,
                  }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      top: 30,
                      right: 10,
                      width: 30,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 5,
                      backgroundColor: COLORS.white,
                    }}
                  >
                    <Image
                      source={icons.favourite}
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 20,
                        tintColor: plat.is_favourite ?
                          COLORS.secondary : COLORS.additionalColor4,
                      }} />
                  </View>
                </ImageBackground>
                {/* details */}
                <View
                  style={{
                    flex: 1,
                    marginLeft: SIZES.base,
                  }}

                >
                  {/* titre */}
                  <Text
                    style={{
                      ...FONTS.h3,
                      fontSize: 18,
                    }}
                  >
                    {plat.name}
                  </Text>
                  {/* durée */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      marginTop: SIZES.base,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.body4,
                      }}
                    >
                      Par {plat.chef}
                    </Text>
                    <IconLabel
                      icon={icons.reminder}
                      label={plat.duration}
                      containerStyle={{
                        marginLeft: SIZES.base,
                      }}
                      iconStyle={{
                        width: 15,
                        height: 15,
                      }}
                      iconLabel={{
                        ...FONTS.body4,
                      }} />
                  </View>
                  {/* price */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      marginTop: SIZES.base,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.h2,
                        color: COLORS.primary,
                      }}
                    >
                      {plat.price.toFixed(2)}Frs
                    </Text>
                    <IconLabel
                      icon={icons.star}
                      label={plat.ratings}
                      containerStyle={{
                        marginLeft: SIZES.base,
                      }}
                      iconStyle={{
                        width: 15,
                        height: 15,
                        tintColor: COLORS.primary2,
                      }}
                      labelStyle={{
                        marginLeft: 5,
                        color: COLORS.black,
                        ...FONTS.h3,
                      }} />

                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      marginTop: SIZES.base,
                    }}
                  >
                    <View style={{ flexDirection: "column" }}>
                      <Text
                        style={{
                          ...FONTS.h4,
                          //flexDirection: 'column'
                        }}
                      >
                        Ingredients:
                      </Text>
                      <IconLabel
                        icon={icons.sun}
                        label={plat.ratings}
                        containerStyle={{
                          marginLeft: SIZES.base,
                        }}
                        iconStyle={{
                          width: 15,
                          height: 15,
                          tintColor: COLORS.primary2,
                        }}
                        labelStyle={{
                          marginLeft: 5,
                          color: COLORS.black,
                          ...FONTS.h3,
                        }} />
                    </View>
                    <Text
                      style={{
                        ...FONTS.h5,
                        color: COLORS.lightBlueColor,
                        flexDirection: 'column'
                      }}
                    >
                      {plat.ingredients}
                    </Text>


                  </View>
                </View>

              </TouchableOpacity>


            </>

          )} />
          <BottomSheet
            ref={bottomSheetRef}
            closeOnDragDown={true}
            height={250}
            openDuration={250}
            customStyles={{
              container: {
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor: '#f1f3f6'
              },
            }}
          >
<View>
        <Text style={{textAlign: 'center', fontSize: SIZES.body2}}>Liste des element A filtrer</Text>
      </View>

          </BottomSheet>
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
        {renderHeader({item})}
  
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
  


export default RestaurantDetail;
