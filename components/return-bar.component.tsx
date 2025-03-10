import { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContext } from "../contexts/navigation.context";

const styles = StyleSheet.create({
   bar: {
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },

   back: {
      position: 'absolute',
      left: 0,
   },

   img: {
      width: 30,
      height: 30,
   },

   title: {
      color: 'white',
      fontSize: 20,
   }
});

type ReturnBarProps = {
   title: string,
}

export default function ReturnBar({ title }: ReturnBarProps) {
   const { setScreen, prevScreens } = useContext(NavigationContext);
   
   const handleReturn = () => {
      const prev = prevScreens.pop();
      
      if (prev) setScreen(prev);
   }

   return (
      <View style={styles.bar}>
         <TouchableOpacity style={styles.back} onPress={handleReturn}>
            <Image style={styles.img} source={require('../assets/left-arrow.png')} />
         </TouchableOpacity>
         <Text style={styles.title}>{title}</Text>
      </View>
   )
}