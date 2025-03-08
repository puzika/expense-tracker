import { Dispatch, SetStateAction } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

const styles = StyleSheet.create({
   nav: {
      height: 80,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#1f303a',
      paddingHorizontal: 20,
      borderTopColor: '#10CFAE',
      borderTopWidth: 2,
   },

   link: {
      fontSize: 12,
      color: 'white',
   }
})

type NavigationProps = {
   navigate: Dispatch<SetStateAction<string>>
}

export default function Navigation({ navigate }: NavigationProps) {
   const links = [
      { link: 'home', title: 'Home' },
      { link: 'transactions', title: 'Transactions' },
      { link: 'add', title: 'Add' },
      { link: 'goals', title: 'Goals' },
      { link: 'statistics', title: 'Statistics' },
   ];


   return (
      <View style={styles.nav}>
         {
            links.map(({ link, title}) => (
               <Text key={link} style={styles.link} onPress={() => navigate(link)}>{title}</Text>
            ))
         }
      </View>
   )
}