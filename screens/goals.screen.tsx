import { useContext } from "react";
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GoalsContext } from "../contexts/goals.context";
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

   goals: {
      marginTop: 100,
      rowGap: 15,
   },

   goal: {
      rowGap: 10,
      backgroundColor: '#1f303a',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderColor: '#10cfae',
      borderWidth: 2,
      borderRadius: 20,
      marginBottom: 20,
   },

   row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
   },

   description: {
      color: 'white',
      fontSize: 20,
      maxWidth: 200
   },

   date: {
      color: 'white',
      fontSize: 16,
   },

   add: {
      marginTop: 20,
      alignItems: 'center',
   },

   addImg: {
      width: 50,
      objectFit: 'contain',
   },

   img: {
      width: 25,
      objectFit: 'contain',
   }
})

export default function Goals() {
   const { goals, setGoals } = useContext(GoalsContext);

   return (
      <View style={styles.screen}>
         <View style={styles.container}>
            <ReturnBar title={'Goals'} />
            <ScrollView style={styles.goals}>
               {
                  goals.map(({ setDate, dueDate, description }) => (
                     <View key={Math.random().toString(36).slice(2)} style={styles.goal}>
                        <View style={styles.row}>
                           <Text style={styles.description}>{description}</Text>
                           <View style={styles.row}>
                              <Image style={styles.img} source={require('../assets/tick.png')} />
                              <Image style={styles.img} source={require('../assets/trash.png')} />
                           </View>
                        </View>
                        <View style={styles.row}>
                           <Text style={styles.date}>{ setDate }</Text>
                           <Text style={styles.date}>{ dueDate }</Text>
                        </View>
                     </View>
                  ))
               }
               <TouchableOpacity style={styles.add}>
                  <Image style={styles.addImg} source={require('../assets/add-green.png')} />
               </TouchableOpacity>
            </ScrollView>
         </View>
         <NavigationBar />
      </View>
   )
}