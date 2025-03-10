import { View, StyleSheet } from "react-native";
import NavigationBar from "../components/navigation.component";
import ReturnBar from "../components/return-bar.component";

const styles = StyleSheet.create({
   screen: {
      flex: 1,
   },

   container: {
      flex: 1,
      padding: 20,
   },
})

export default function Statistics() {
   return (
      <View style={styles.screen}>
         <View style={styles.container}>
            <ReturnBar title={'Statistics'} />
         </View>
         <NavigationBar />
      </View>
   )
}