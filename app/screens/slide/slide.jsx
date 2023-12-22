import React, { useRef } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = (width / 6) * 3;
const padding = (width - itemWidth) / 2;
const offset = itemWidth;
export default function Slide(): JSX.Element {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
      <View style={styles.container}>
        <ScrollView
            horizontal
            pagingEnabled
            decelerationRate="fast"
            contentContainerStyle={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            snapToInterval={offset}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                useNativeDriver: false,
            })}>
            {[1, 2, 3, 4, 5, 6, 7].map((x, i) => (
                <Item key={x} i={i} scrollX={scrollX} />
            ))}
        </ScrollView>
      </View>
    );
}

function Item({ i, scrollX }) {
    const scale = scrollX.interpolate({
        inputRange: [-offset + i * offset, i * offset, offset + i * offset],
        outputRange: [0.75, 1, 0.75],
    });
    return <Animated.View style={[styles.item, { transform: [{ scale }] }]} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afa'
  },
    scrollView: {
        paddingHorizontal: padding,
        marginTop: 33,
    },
    item: {
        height: itemWidth,
        width: itemWidth,
        backgroundColor: 'darkblue',
        borderRadius: 10,
    },
});