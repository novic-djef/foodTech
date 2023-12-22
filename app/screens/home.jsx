import React, {useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Animated, SafeAreaView, Dimensions, StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { IconsButton, TextButton, VerticalCourses, CategoriesPlats, SlideFoods, RestaurantVertical } from '../components';
import { COLORS, FONTS, icons, SIZES, images, dummyData, data } from '../constants';

const { width } = Dimensions.get('screen');
const colors = ['#CDAF3F', '#6CE8C6', '#E89EEB'];
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import novic from '../../assets/images/novic.png'
// Tab ICons...
import home from '../../assets/drawer/home.png';

import searchs from '../../assets/drawer/search.png'
import notifications from '../../assets/drawer/bell.png';
import settings from '../../assets/drawer/settings.png';
import logout from '../../assets/drawer/logout.png';
// Menu
import menu from '../../assets/drawer/menu.png';
import close from '../../assets/drawer/close.png';

import RestaurantHorizontal from '../components/RestaurantHorizontal';
import { selectRestaurant } from '../redux/action/restaurantAction';
// logique de redux 
import { setRestaurants } from '../redux/action/restaurantAction';


 function Home(props) {

  const navigation = useNavigation();

  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

 

  const Section = ({containerStyle, title, onPress, children}) => {
    return (
      <View
        style={{
          ...containerStyle,
        }}
      >
        <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
        }}>
  
   <Text
     style={{
      flex: 1,
      ...FONTS.h3,
      right: 22,
     }}
   >
    {title}
   </Text>
   <TextButton
            contentContainerStyle={{
              width: 80,
              borderRadius: 30,
              left: 24,
              backgroundColor: COLORS.primary,
            }}
            label="tout voir"
            onPress={onPress} disabled={undefined} labelStyle={undefined}   />
  
        </View>
      {children}
      </View>
    );
  };
    return (


        <SafeAreaView style={styles.Menu}>
    
          <View style={{ justifyContent: 'flex-start', padding: 15 }}>
            <Image source={novic} style={{
              width: 60,
              height: 60,
              borderRadius: 10,
              marginTop: 8
            }}></Image>
    
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 20
            }}>Novic Toleu</Text>
    
            <TouchableOpacity>
              <Text style={{
                marginTop: 6,
                color: 'white'
              }}>(+237) 690089951</Text>
            </TouchableOpacity>
    
            <View style={{ flexGrow: 1, marginTop: 50 }}>
              {
                // Tab Bar Buttons....
              }
    
              {TabButton(currentTab, setCurrentTab, "Home", home)}
              {TabButton(currentTab, setCurrentTab, "Searchs", searchs)}
              {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
              {TabButton(currentTab, setCurrentTab, "Settings", settings)}
    
            </View>
    
            <View style={{marginBottom: 30}}>
              {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
            </View>
    
          </View>
    
          {
            // Over lay View...
          }
    
          <Animated.View style={{
            flexGrow: 1,
            backgroundColor: 'white',
            position: 'absolute',
            top: -30,
            bottom: 0,
            left: -10,
            right: 0,
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderRadius: showMenu ? 15 : 0,
            // Transforming View...
            transform: [
              { scale: scaleValue },
              { translateX: offsetValue }
            ]
          }}>
    
            {
              // Menu Button...
            }
    
            <Animated.View style={{
              transform: [{
                translateY: closeButtonOffset
              }]
            }}>
              <TouchableOpacity onPress={() => {
                // Do Actions Here....
                // Scaling the view...
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()
    
                Animated.timing(offsetValue, {
                  // YOur Random Value...
                  toValue: showMenu ? 0 : 230,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()
    
                Animated.timing(closeButtonOffset, {
                  // YOur Random Value...
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()
    
                setShowMenu(!showMenu);
              }}>
   
   <Image source={showMenu ? close : menu} 
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'black',
                  marginTop: -40,
                  top: 63,
                  left: 12,
    
                }}></Image>
    
              </TouchableOpacity>
              
              {/* <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20
              }}>{currentTab}</Text> */}
    
           


    {renderHeader()}
        <ScrollView>
          {/* header */}


          {/* slide */}
          {slide()}

          {/* search */}
          {search()}

          {/* Categories */}

          {renderCategories()}

          {/* cours populaire */}

          {/* {renderPopularCours()} */}

          {/* restaurant */}
          {restaurantFavoris({ data, setRestaurants, selectRestaurant })}

          {restaurantProche()}

          {restaurant()}

        </ScrollView>


    
             
            </Animated.View>
    
          </Animated.View>
    
        </SafeAreaView>
      );
    
    function TabButton(currentTab, setCurrentTab, title, image){
      return (
    
        <TouchableOpacity onPress={() => {
          if (title == "LogOut") {
            // Do your Stuff...
          } else {
            setCurrentTab(title)
          }
        }}>
          <View style={{
            flexDirection: "row",
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: currentTab == title ? 'white' : 'transparent',
            paddingLeft: 13,
            paddingRight: 35,
            borderRadius: 8,
            marginTop: 15
          }}>
    
            <Image source={image} style={{
              width: 25, height: 25,
              tintColor: currentTab == title ? "#3498db" : "white"
            }}></Image>
    
            <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
              paddingLeft: 15,
              color: currentTab == title ? "#3498db" : "white"
            }}>{title}</Text>
    
          </View>
        </TouchableOpacity>
      );
    }

    function renderHeader(){
      return (
        <View
        style={{
         flexDirection: 'row',
         marginTop: 15,
         paddingHorizontal: SIZES.padding,
         alignItems:'center',
  
        }}
         >
          {/* greeting */}
          <View
          style={{
            flexDirection: 'row',
            flex: 1,

          }}>
              {/* {showMenu ?
              <TouchableOpacity
              style={{
                marginLeft: -12
              }} 
             // onPress={() => setShowMenu(showMenu)}
             >
            <Icon
            name='x'
            color='#000' size={35}  />
            </TouchableOpacity>
            : 
            <TouchableOpacity
            style={{
              marginLeft: -12
            }}
            //onPress={() => setShowMenu(showMenu)}
            >
            <Icon
            name='align-left'
            color='#000' size={35}  />
               
            </TouchableOpacity>
          } */}
             {/* <Image source={showMenu ? close : menu} 
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'black',
                  marginTop: 40,
    
                }}></Image> */}
           
            
       <View style={{marginLeft: 22}}>
       <Text style={{...FONTS.h3}}>Hello Novic</Text>
         <Text style={{ color: COLORS.gray50, ...FONTS.body4}}>Dim, 19 mars 2023</Text>
       </View>
          </View>
  
          {/* notifications */}
        <View style={{
          flexDirection: "row"
        }}>
        <Icon
            name='shopping-cart'
            color='#000' size={25} style={{marginRight: 12}}  />
        <IconsButton
            icon={icons.notification}
            iconStyle={{
              tintColor: COLORS.black,
            }} containerStyle={{marginRight: -24}} onPress={undefined}
             />
        </View>

         
          </View>
      );
    }

    function slide() {
      return (
        <FlatList
        horizontal
        data={dummyData.slides}
       // listKey="Courses"
        keyExtractor={item => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
        marginTop: SIZES.padding,
        margin: 22,
        }}
        renderItem={({item, index}) => (
          <SlideFoods
             containerStyle={{
                marginLeft: index === 0 ? SIZES.
                padding : SIZES.radius,
               marginRight: index === dummyData.
               restaurants.length - 1 ?
             SIZES.padding : 0,
             }}
          course={item}
             />
        )}
        />
      );
     }
      
    function search() {
       return(
        <View style={styles.search}>
        <TouchableOpacity style={styles.icon}>
          <Icon
            name='search'
            color='#000' size={25}  style={styles.iconImage} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="efffectuer votre recherche ici..."
          placeholderTextColor="gray"
        />
        <TouchableOpacity style={[styles.icon, {color: 'red'}]}>
        <Icon
            name='align-right'
            color='#000' size={25} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
       )
    }

    function renderCategories() {
      return (
        <Section
          title="Categories"
          containerStyle={{
            marginTop: 50,
          }}>
         <FlatList
        horizontal
        data={dummyData.categoriesPlats}
       // listKey="Courses"
        keyExtractor={item => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
        marginTop: SIZES.padding,
        margin: 22,
        }}
        renderItem={({item, index}) => (
          <CategoriesPlats
             containerStyle={{
                marginLeft: index === 0 ? SIZES.
                padding : SIZES.radius,
               marginRight: index === dummyData.
               restaurants.length - 1 ?
             SIZES.padding : 0,
             }}
          course={item}
             />
        )}
        />
        </Section>
      );
    }

   
    function restaurantFavoris({ setRestaurants, selectRestaurant}) {
      const [isLoading, setIsLoading] = useState(true);
      const dispatch = useDispatch();

      const handleRestaurantClick = (item) => {
        dispatch(selectRestaurant(item));
      };

      useEffect(() => {
        const loadData = async () => {
          try {
            setTimeout(async () => {
            await setRestaurants(); 
            setIsLoading(false); 
          }, 2000);
          } catch (error) {
            // Gérez les erreurs ici
            console.error(error);
          }
          
        };

      loadData()
      }, [])
      return (
        <Section
        title="Restaurant Favoris"
        >
        <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
        marginTop: SIZES.padding,
        margin: 22,
        }}
        renderItem={({item, index}) => (
      
          <> 
          
          {isLoading ? (
             
           <View style={{flex: 1}}>
        <View style={{justifyContent: "center", alignItems: 'center',}}>
            <LottieView
                style={styles.lottie}
                source={require("../../assets/json/loadingRestau.json")}
                autoPlay
                loop
            />
        </View>
           </View>
           
          ) : (
              <TouchableOpacity
              key={index}
              
              // onPress={() => { 
              //   handleRestaurantClick(item), console.debug('item..: ', item)}}
              onPress={() => {
                setSelectedRestaurant(item);
                navigation.navigate
                ("restaurantDetail", { restaurant: item})}}
              >
              <RestaurantVertical
              containerStyle={{
                marginLeft: index === 0 ? SIZES.
                  padding : SIZES.radius,
                marginRight: index === data.length - 1 ?
                  SIZES.padding : 0,
              }}
              course={item} 
              />
              </TouchableOpacity>
      )}
          </>
        
        )}
        />
        </Section>
      );
          
     }
    

    function restaurantProche() {
    
      return (
        <Section
        title="Restaurant Proche"
        >
        <FlatList
        horizontal
        data={dummyData.restaurants}
       // listKey="Courses"
        keyExtractor={item => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
        marginTop: SIZES.padding,
        margin: 22,
        }}
        renderItem={({item, index}) => (
      
          <>
          <TouchableOpacity
            onPress={() => {
               navigation.navigate
              ("detailRestaurant", { course: item, sharedElementPrefix: "Cours"})}}
          
          >
            <RestaurantVertical
            containerStyle={{
              marginLeft: index === 0 ? SIZES.
                padding : SIZES.radius,
              marginRight: index === dummyData.
                restaurants.length - 1 ?
                SIZES.padding : 0,
            }}
            course={item} 
            />
            </TouchableOpacity>
          
          </>
        
        )}
        />
        </Section>
      );
     }

     function restaurant() {
      return (
        <Section
        title="Restaurants"
        >
        <FlatList
        //horizontal
        data={dummyData.restaurants}
       // listKey="Courses"
        keyExtractor={item => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
        marginTop: SIZES.padding,
        margin: 2,
        }}
        renderItem={({item, index}) => (
      
          <>
          <TouchableOpacity
            onPress={() => {
               navigation.navigate
              ("restaurantDetail", { course: item, sharedElementPrefix: "Cours"})}}
          
          >
            <RestaurantHorizontal
            containerStyle={{
              marginVertical: SIZES.padding,
              marginLeft: index === 0 ? SIZES.
                padding : SIZES.radius,
              marginRight: index === dummyData.
                restaurants.length - 1 ?
                SIZES.padding : 0,
            }}
            course={item} 
           
            />
            </TouchableOpacity>
           
          </>
        
        )}
        />
        </Section>
      );
     }

   
}

export default Home;

// const mapDispatchToProps = (dispatch) => {
//     return {
//       showDetailListPending: () => dispatch(showDetailListPending()),
//       showDetailListSucsess: () => dispatch(showDetailListSucsess()),
//       showDetailListError: () => dispatch(showDetailListError()),
//       showDetailListReset: () => dispatch(showDetailListReset()),
//     }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
bgCircle1: {
    position: 'absolute',
    height: width * 2,
    width: width * 2,
    borderRadius: width,
    left: 0,
    top: 0
},
  // container: {
  //   flex: 1,
  //   backgroundColor: '#adf'
  // },
 search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 25,
    padding: 1,
    position: 'absolute',
    margin: 10,
    top: 130

  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    color: 'black',
  },
  icon: {
    padding: 2,
  },
  iconImage: {
    width: 25,
    height: 25,
    margin: 4
  },

  spinnerTextStyle: {
    color: '#FFF'
  },
  Menu: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  lottie: {
    width: 148,
    height: 148
},
text: {
  fontSize: 7,
  fontWeight: 'bold',
},
});