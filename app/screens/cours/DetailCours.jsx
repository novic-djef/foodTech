

import { View, Text, ImageBackground, TouchableOpacity, Animated, Keyboard } from 'react-native'
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'

//  import Video from 'react-native-video';



import { IconsButton, LineDivider} from '../../components';

import { SIZES, FONTS, COLORS, icons, constants, dummyData } from '../../constants';

import ChapitreCours from './CoursTabs/chapitreCours';  
import DossierCours from './CoursTabs/dossierCours';
import DescriptionCours from './CoursTabs/descriptionCours';

const course_details_tabs = constants.course_details_tabs.map
((course_details_tab) => ({
  ...course_details_tab,
  ref: createRef()
}))

const TabIndicator = ({mesurLayout, scrollX}) => {
const inputRange = course_details_tabs.map((_, i) => i * SIZES.width)
const tabIndicatorWidth = scrollX.interpolate({
  inputRange,
  outputRange: mesurLayout.map(mesure => mesure.width)
})

const translateX = scrollX.interpolate({
  inputRange,
  outputRange: mesurLayout.map(mesure => mesure.x)
})

  return(
    <Animated.View  
      style={{
        position: "absolute",
        bottom: 0,
        height: 4,
        width: tabIndicatorWidth,
        borderRadius: SIZES.radius,
        backfaceVisibility: COLORS.primary,
        transform : [{
          translateX
        }]
      }}
    />
  )
}

const Tabs = ({ scrollX, onTabPress }) =>{
  
const [ mesurLayout, setMesureLayout] = useState([])
const containerRef = useRef()

useEffect(() => {
  let ml = []

  course_details_tabs.forEach(course_details_tab => {
    course_details_tabs.ref?.current?.mesurLayout(
      containerRef.current,
      (x, y, width, height) => {
        ml.push({
          x, y, width, height
        })
        if(ml.length === course_details_tabs.length) {
          setMesureLayout(ml)
        }
      }
    )
  })
}, [containerRef.current])
  return(
<View
   ref={containerRef}
   style={{
    flex: 1,
    flexDirection: 'row',
   }}
>
    {/* Tab indicator */}

  {mesurLayout.length > 0 && <TabIndicator  
  mesurLayout={mesurLayout} scrollX={scrollX} />}

    {course_details_tabs.map((item, index) => {
     return(
      <TouchableOpacity
        key={`Tab-${index}`}
        ref={item.ref}
        style={{
          flex: 1,
          paddingHorizontal: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          
          Keyboard.dismiss()
          onTabPress(index)
        }}
      >
       <Text
         style={{
          ...FONTS.h3,
          fontSize: SIZES.height > 800 ? 18 : 17
         }}
       
       >
        {item.label}
       </Text>

      </TouchableOpacity>
     )
    })}
</View>
  )
}

const DetailCours = ({navigation, route}) => {
const { selectedCourse } = route.params;
//const [playVideo, setPLayVideo] = useState(false);

const flatListRef = useRef();
const scrollX = useRef(new Animated.Value(0)).current;

const onTabPress = useCallback(tabIndex => {
  flatListRef?.current?.scrollToOffset({
    offset: tabIndex * SIZES.width
  })
})

function renderHeaderComponents() {
    return(
        <>
        {/* back botton */}
        <View
           style={{
            flex: 1,
           }}
        >
            <IconsButton 
              icon={icons.back}
              iconStyle={{
                width: 25,
                height: 25,
                tintColor: COLORS.black
              }}
              containerStyle={{
                width: 40, 
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                backgroundColor: COLORS.white
              }}
              onPress={() => navigation.goBack()}
            />

        </View>

        {/* share et favorite */}
        <View
          style={{
            flexDirection: "row",
          }}
        >

            <IconsButton 
            icon={icons.media}
            iconStyle={{
                tintColor: COLORS.white,
            }}
            containerStyle={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center"
            }}
            />
             <IconsButton 
            icon={icons.favourite_outline}
            iconStyle={{
                tintColor: COLORS.white,
            }}
            containerStyle={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center"
            }}
            />

        </View>
        </>
    )
}

function renderHeader() {

   //if(playVideo){
        return(
            <View
              style={{
                flexDirection: "row",
                position: 'relative',
                paddingHorizontal: SIZES.radius,
                paddingBottom: SIZES.base,
                height: 65,
                backgroundColor: COLORS.black,
                alignItems: "flex-end",
              }}
            >
                {renderHeaderComponents()}

            </View>
        )
  // }else {
  //       return(
  //           <View
  //             style={{
  //               position: "absolute",
  //               top: SIZES.height > 800 ? 40 : 20,
  //               left: 0,
  //               right: 0,
  //               flexDirection: "row",
  //               paddingHorizontal: SIZES.padding,
  //               wIndex: 1
  //             }}
  //           >
  //         {renderHeaderComponents()}
  //           </View>
  //       )
  //  }
    
}

function renderVideoSection() {
    return(
        <View
          style={{
            height: SIZES.height > 800 ? 200 : 200,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.gray90
          }}
        >
       

       {/* tumbnail */}
       <ImageBackground
         source={selectedCourse?.thumbnail}
         style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
         }}
       
       >
        {/* PLay button */}

        {/* <IconsButton 
          icon={icons.play}
          iconStyle={{
            width: 25,
            height: 25,
            tintColor: COLORS.white
          }}
          containerStyle={{
            width: 55,
            height:55,
            alignItems: "center",
            justifyContent: 'center',
            marginTop: SIZES.padding,
            borderRadius: 30,
            backgroundColor: COLORS.primary

          }}
          onPress={() => setPLayVideo(true)}
        /> */}

       </ImageBackground>
       {/* {playVideo && 
       <Video
          source={{uri: dummyData?.sample_video_url }}
          controls={true}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: COLORS.black
          }}
       />
       } */}
        </View>
    )
}

function renderContent() {
  return(
    <View
      style={{
        flex: 1,
      }}
    >
      {/* tabs */}
      <View
        style={{
          height: 60
        }} 
      
      >
<Tabs 
scrollX={scrollX}
onTabPress={onTabPress }
/>
      </View>


      {/* lineDivider */}
      <LineDivider 
        lineStyle={{
          backgroundColor: COLORS.gray20
        }}
      
      />

      {/* content */}
       <Animated.FlatList  
         ref={flatListRef}
         horizontal
         pagingEnabled
         snapToAlignment="center"
         snapToInterval={SIZES.width}
         decelerationRate="fast"
         keyboardDismissMode="on-drag"
         showsHorizontalScrollIndicator={false}
         data={constants.course_details_tabs}
         keyExtractor={item => `CoursDetailTabs-${item.id}`}
         onScroll={
          Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}}
          ], {
            useNativeDriver: false
          })
         }
       renderItem={({item, index}) => {
        return(
          <View
            style={{
              width: SIZES.width
            }}
          
          >

            {index == 0 && <ChapitreCours /> }
            {index == 1 && <DossierCours /> }
            {index == 2 && <DescriptionCours /> }
          </View>
        )
       }}
       />

    </View>
  )
}

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >
      
  {/* header Section */}
  {renderHeader()}
        {/* Video */}
        {renderVideoSection()}
          
      

        {/* contenu */}
        {renderContent()}
    </View>
  )
}

export default DetailCours