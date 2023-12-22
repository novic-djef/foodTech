import React, {useRef} from 'react'
import { useNavigation } from '@react-navigation/native';
import {View, Text, Image, FlatList, TextInput, ScrollView} from 'react-native';

import {TextButton, CategoriesCard} from '../components';
import {COLORS, FONTS, SIZES, icons, dummyData} from '../constants';

const CoursScreen = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef()
   
  function renderTopSearches() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}>
          Top Search
        </Text>
        <FlatList
          horizontal
          data={dummyData.top_searches}
          listKey="TopSearcher"
          keyExtractor={item => `TopSearches-${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.radius,
          }}
          renderItem={({item, index}) =>(
            <TextButton
               label={item.label}
               contentContainerStyle={{
                paddingVertical: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                marginLeft: index === 0 ? SIZES.
                padding : SIZES.radius,
                marginRight: index ===  dummyData.
                top_searches.length - 1 ? SIZES.
                padding : 0,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.gray10,
               }}
               labelStyle={{
                color: COLORS.gray50,
                ...FONTS.h3,
               }}
            />
          )}
        />
      </View>
    );

 }

    function renderBrowCategorie() {
        return (
           <View
             style={{
                marginTop: SIZES.padding,
             }}
           >
            <Text
              style={{
                marginHorizontal: SIZES.padding,
                ...FONTS.h2,
              }}

             >
                Browser Categories
             </Text>
            <FlatList
               data={dummyData.categories}
               numColumns={2}
               scrollEnabled={false}
               listKey="BrowserCategorie"
               keyExtractor={item => `BrowserCategories-${item.id}`}
               contentContainerStyle={{
                marginTop: SIZES.radius,
               }}
                renderItem={({item, index}) => (
                    <CategoriesCard
                       category={item}
                       containerStyle={{
                        height: 130,
                        width: (SIZES.width - (SIZES.padding * 2) - SIZES.radius) / 2,
                        marginTop: SIZES.radius,
                        marginLeft: (index + 1) % 2 === 0
                        ? SIZES.radius : SIZES.padding,
                       }}
                       onPress={() => navigation.navigate
                        ("listeCours", { category: item, sharedElementPrefix: "Cours"})}
                    />
                )}
            />
           </View>
        );
    }

    // function renderSearchBar() {

    //     // eslint-disable-next-line no-return-assign
    //     return (
    //       <View
    //            style={{
    //             position: 'absolute',
    //             top: 25,
    //             left: 0,
    //             right: 0,
    //             paddingHorizontal: SIZES.padding,
    //             height: 50,
    //            }}
    //         >
    //             <View
    //               style={{
    //                 flex: 1,
    //                 flexDirection: 'row',
    //                 alignItems: 'center',
    //                 width: SIZES.width - (SIZES.padding * 2),
    //                 paddingHorizontal: SIZES.radius,
    //                 borderRadius: SIZES.radius,
    //                 backgroundColor: COLORS.white,
    //               }}
    //             >
    //                 <Image
    //                   source={icons.search}
    //                   style={{
    //                     width: 25,
    //                     height: 25,
    //                     tintColor: COLORS.gray40,
    //                   }}

    //                 />

    //                 <TextInput
    //                   style={{
    //                     flex: 1,
    //                     marginLeft: SIZES.base,
    //                     ...FONTS.h4,
    //                   }}
    //                   value=""
    //                   placeholder="effectuer votre recherche ICI"
    //                   placeholderTextColor={COLORS.gray}
    //                 />

    //             </View>
            
    //       </View>
    //     );
    // }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          marginTop: 70,
          paddingBottom: 300,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag"
        //onScroll={onScroll}
       
      >
        {/* rechercher */}
        {renderTopSearches()}

        {/* toutes la categories */}
        {renderBrowCategorie()}

      </ScrollView>
       {/* searchbar */}
       {/* {renderSearchBar()} */}
    </View>

  )
}

export default CoursScreen