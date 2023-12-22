/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import Icon, {Icons} from '../../components/Icons'
import Colors from '../../constants/Colors';
import Home from '../home';
// import Historique from '../historique';
import Account from '../account';
import Panier from '../panier';
import Categories from '../categories';
import FavoriteList from '../favoriteListe';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Feather,
    icon: 'home',
    component: Home,
    color: Colors.primary,
    alphaClr: Colors.primaryAlpha,
  },
  {
    route: 'categories',
    label: 'Categories',
    type: Icons.Feather,
    icon: 'search',
    component: Categories,
    color: Colors.green,
    alphaClr: Colors.greenAlpha,
  },
  {
    route: 'Panier',
    label: 'Panier',
    type: Icons.Feather,
    icon: 'shopping-cart',
    component: Panier,
    color: Colors.green,
    alphaClr: Colors.greenAlpha,
  },
  {
    route: 'Favorites',
    label: 'Favorite',
    type: Icons.Feather,
    icon: 'heart',
    component: FavoriteList,
    color: Colors.green,
    alphaClr: Colors.bag5Bg,
  },
  {
    route: 'account',
    label: 'Account',
    type: Icons.FontAwesome,
    icon: 'user-circle-o',
    component: Account,
    color: Colors.green,
    alphaClr: Colors.purpleAlpha,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  // useEffect(() => {
  //   if (focused) {
  //     // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
  //     viewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
  //     textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
  //   } else {
  //     viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
  //     textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
  //   }
  // }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 0.65}]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            {backgroundColor: item.color, borderRadius: 26},
          ]}
        />
        <View
          style={[
            styles.btn,
            {backgroundColor: focused ? null : item.alphaClr},
          ]}>
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.white : Colors.purple} style={undefined} />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: Colors.white,
                  paddingHorizontal: 8,
                }}>
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function TabMenu() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 40,
            position: 'absolute',
            

      
            borderTopRightRadius: 22,
            borderTopLeftRadius: 22
          },
        }}>
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderRadius: 16,
  },
});
