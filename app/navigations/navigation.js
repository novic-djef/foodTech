import React, { useEffect } from 'react';
// import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Loading from './app/components/loading';
import TabMenu from '../screens/menu/tabMenu';
import FavoriteList from '../screens/favoriteListe';
import Drawer from '../screens/menu/drawer';
import RestaurantDetail from '../screens/detailScreen';
import Categories from '../screens/categories';
import Payemant from '../screens/payement';
import Panier from '../screens/panier';
import ListeCours from '../screens/cours/listeCours';
import DetailCours from '../screens/cours/DetailCours';
import DetailPlats from '../screens/cours/DetailPlats';
//import { retrieveTokenAction } from './app/redux/action/loginAction';

//import { Platform } from 'react-native';
//import RootStackScreen from './app/screens/auth/RootStackScreen';
//import SplashScreen from 'react-native-splash-screen'


const Stack = createStackNavigator();

export default function Navigation() {


// useEffect(() => {
//   if(Platform.OS === 'android')  SplashScreen.hide();
  
// }, []);


  //const dispatch = useDispatch();
  //const isLoading = useSelector(state => state.loginReducer.isLoading);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     let userToken;
  //     userToken = null;
  //     try {
  //       userToken = await AsyncStorage.getItem('userToken');
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     dispatch(retrieveTokenAction(userToken));
  //   }, 1000);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Loading />
  //     </View>
  //   );
  // } else {
    return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={TabMenu} />
            <Stack.Screen name="FavoriteList" component={FavoriteList} />
            <Stack.Screen name="drawer" component={Drawer} />
            <Stack.Screen name="restaurantDetail" component={RestaurantDetail} />
            <Stack.Screen name="categories" component={Categories} />
            <Stack.Screen name="payemant" component={Payemant} />
            <Stack.Screen name="panier" component={Panier} />
            <Stack.Screen name="detailRestaurant" component={ListeCours} />
            <Stack.Screen name="DetailCours" component={DetailCours} />
            <Stack.Screen name="detailPlat" component={DetailPlats} />
          </Stack.Navigator>
          {/* <RootStackScreen  /> */}
        </NavigationContainer>
    );
  }

