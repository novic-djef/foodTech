

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

export default function Loader() {


  return (
    <View style={{flex: 1}}>
        <View style={{justifyContent: "center", alignItems: 'center', marginTop: 260}}>
            <LottieView
                style={styles.lottie}
                source={require("../../assets/json/loadingRestau.json")}
                autoPlay
                loop
            />
             <Text style={styles.text}>Veiller Patienter...</Text>
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