import React from "react"
import { StyleSheet, View } from "react-native";
import FAB from 'react-native-animated-fab';

function FloatingButton() {
    return(
      <>
    <View style={styles.container}>
    <FAB
      renderSize={60}
      borderRadius={30}
      onPress={() => Alert.alert('FAB pressed !')}
    />
  </View>
      </>
    )
  }

  const styles = StyleSheet.create({

    container: {
        flex: 1,
      },
  })

  export default FloatingButton