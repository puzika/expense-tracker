import { Dispatch, SetStateAction } from "react";
import { Text, StyleSheet } from "react-native";

type LinkProps = {
   title: string,
   navigate: Dispatch<SetStateAction<string>>,
   link: string,
}

const styles = StyleSheet.create({
   link: {
      color: '#10CFAE',
      textDecorationLine: 'underline',
   }
})

export default function Link({ title, link, navigate }: LinkProps) {
   return (
      <Text style={styles.link} onPress={() => navigate(link)}>{title}</Text>
   )
}

