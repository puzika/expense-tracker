import { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
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

   item: {
      alignItems: 'center',
   },

   text: {
      fontSize: 12,
   },

   img: {
      width: 25,
      objectFit: 'contain',
   }
})

export default function NavigationBar() {
   const { setScreen, screen, prevScreens, setPrevScreens } = useContext(NavigationContext);
   const links: { link: Screens, title: string, imgWhite: any, imgGreen: any }[] = [
      { link: 'home', title: 'Home', imgWhite: require('../assets/home-white.png'), imgGreen: require('../assets/home-green.png') },
      { link: 'transactions', title: 'Transactions', imgWhite: require('../assets/transaction-white.png'), imgGreen: require('../assets/transaction-green.png') },
      { link: 'add', title: 'Add', imgWhite: require('../assets/add-white.png'), imgGreen: require('../assets/add-green.png') },
      { link: 'goals', title: 'Goals', imgWhite: require('../assets/goals-white.png'), imgGreen: require('../assets/goals-green.png') },
      { link: 'statistics', title: 'Statistics', imgWhite: require('../assets/statistics-white.png'), imgGreen: require('../assets/statistics-green.png') },
   ];

   const handleNavigation = (link: Screens): void => {
      if (screen !== link) {
         setPrevScreens([...prevScreens, screen]);
         setScreen(link);
      }
   }

   return (
      <View style={styles.nav}>

         {
            links.map(({ link, title, imgWhite, imgGreen}) => (
               <TouchableOpacity key={link} style={styles.item} onPress={() => handleNavigation(link)}>
                  <Image source={link === screen ? imgGreen : imgWhite} style={styles.img} />
                  <Text style={[styles.text, { color: link === screen ? '#10cfae' : 'white'}]}>{title}</Text>
               </TouchableOpacity>   
            ))
         }
      </View>
   )
}