import { useContext } from "react";
import { NavigationContext, Screens } from "../contexts/navigation.context";
import { Text, StyleSheet } from "react-native";

type LinkProps = {
   title: string,
   link: Screens,
}

const styles = StyleSheet.create({
   link: {
      color: '#10CFAE',
      textDecorationLine: 'underline',
   }
})

export default function Link({ title, link }: LinkProps) {
   const { setScreen } = useContext(NavigationContext)
   return (
      <Text style={styles.link} onPress={() => setScreen(link)}>{title}</Text>
   )
}

