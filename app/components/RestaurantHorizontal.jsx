/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { Image, TouchableOpacity, View, Text, Animated, StyleSheet, FlatList, Button, } from 'react-native';

import { IconLabel } from '.'
import Icon from 'react-native-vector-icons/Feather';
import { SIZES, icons, FONTS, COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export default function RestaurantHorizontal({containerStyle, course }) {

    const navigation = useNavigation();

    const [showMenu, setShowMenu] = useState(false)
    const [animation, setAnimation] = useState(new Animated.Value(0));
    
    const [articles, setArticles] = useState([
        { id: '1', title: 'Article 1', isFavorite: false },
      ]);

      const toggleFavorite = (id) => {
        setArticles((prevArticles) =>
          prevArticles.map((article) =>
            article.id === id ? { ...article, isFavorite: !article.isFavorite } : article
          )
        );
      };

    const handlePress = () => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setAnimation(new Animated.Value(0)); // Reset animation
        setShowMenu(!showMenu)
      });
      
    };
  
    const heartStyle = {
      transform: [
        {
          scale: animation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.5, 2],
          }),
        },
        {
          rotate: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg'],
          }),
        },
      ],
    };
    
  return (
   <>

   <View
      style={{
        width: 330,
        right: 20,
        bottom: 22,
        ...containerStyle,
        
      }}
   
      >
      <Image
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 140,
          left: 13,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,

        }}
      />

      {/* detail section */}
     
        {/* play */}
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
                {course.title}
              </Text>
            
             
             <>
                <FlatList
                          data={articles}
                          keyExtractor={(item) => item.id}
                          renderItem={({ item }) => (

                            <TouchableOpacity
                            style={{
                                marginLeft: -12
                            }}
                            
                            onPress={() => 
                                {handlePress, toggleFavorite(item.id)}}
                                
                        >
                          {item.isFavorite ?


                            <View style={{marginTop: -30, marginLeft: 20}}>
                                <LottieView
                                    style={styles.lottie}
                                    source={require("../../assets/json/addToFovotite.json")}
                                    autoPlay
                                    loop
                                />
                            </View> :
                            <Animated.View style={[styles.heartContainer, heartStyle]}>
                              <Icon
                              name='heart'
                              color='#000' size={35}  />
                          </Animated.View>
                              }
                        </TouchableOpacity>
                )} />
              </>
  
    {/* <View>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button
              title={item.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              onPress={() => toggleFavorite(item.id)}
            />
          </View>
        )}
      />
      <TouchableOpacity 
      onPress={() => navigation.navigate('FavoriteList', { articles })} >
           <Text>Go to Favorites</Text>
        </TouchableOpacity>
    </View>   */}
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
                 label={course.lieu}
                 containerStyle={{
                  marginTop: SIZES.base,
               }}
              />
             
             <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
        
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
                marginLeft: 160,
                justifyContent: 'flex-end'
              }}
              >{course.quartier}</Text>
              </View>

       
            </View>
      </View>
    </View>

   </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heartContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    lottie: {
      width: 68,
      height: 68
  },
  });
