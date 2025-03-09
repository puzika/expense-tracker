import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
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
      color: 'white',
      fontSize: 16,
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
   const { setScreen } = useContext(NavigationContext);

   return (
      <View style={styles.bar}>
         <Text style={styles.back} onPress={() => setScreen('home')}>Back</Text>
         <Text style={styles.title}>{title}</Text>
      </View>
   )
}