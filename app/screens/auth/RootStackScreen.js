import React  from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';
import TabMenu from '../menu/tabMenu';

const RootStack = createStackNavigator();


const RootStackScreen = () => (

    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="Home" component={TabMenu} />
    </RootStack.Navigator>

)
export default RootStackScreen;