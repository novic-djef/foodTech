import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
//import animation_lljmrq2l from '../../assets/json/animation_lljmrq2l.json'

export default function Loading() {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true, 
    //     animationData: animation_lljmrq2l,
    //     rendererSettings: {
    //       preserveAspectRatio: 'xMidYMid slice'
    //     }
    //   };

  return (
    <View style={{flex: 1}}>
        <View style={{justifyContent: "center", alignItems: 'center', marginTop: 260}}>
            <LottieView
                style={styles.lottie}
                source={require("../../assets/json/animation_lljmrq2l.json")}
                autoPlay
                loop
            />
             <Text style={styles.text}> Soyez Les Bienvenue</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  lottie: {
    width: 248,
    height: 248
},
text: {
  fontSize: 17,
  fontWeight: 'bold',
},
})