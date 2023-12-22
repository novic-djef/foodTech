import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const NoData = ({Children}) => {
  return (
    <View style={{flex: 1}}>
        <View style={{justifyContent: "center", alignItems: 'center', marginTop: 260}}>
            <LottieView
                style={styles.lottie}
                source={require("../../assets/json/noData.json")}
                autoPlay
                loop
            />
             <Text style={styles.text}>{Children}</Text>
        </View>
    </View>
  )
}

export default NoData

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