import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

export default function Loading() {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 5,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <Animated.View 
      style={{
        alignSelf: 'center',
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        borderTopWidth: 5,
        borderTopColor: '#10CFAE',
        borderRightWidth: 5,
        borderRightColor: 'transparent',
        transform: [{ rotate: rotation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        })}]
      }}
    />
  )
}