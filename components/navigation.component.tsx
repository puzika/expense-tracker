import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContext, Screens } from "../contexts/navigation.context";

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

export default function NavigationBar() {
   const { setScreen } = useContext(NavigationContext);
   const links: { link: Screens, title: string }[] = [
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
               <Text key={link} style={styles.link} onPress={() => setScreen(link)}>{title}</Text>
            ))
         }
      </View>
   )
}