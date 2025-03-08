import { TouchableOpacity, Text, StyleSheet } from "react-native";

type ButtonProps = {
   title: string,
   pressHandler?: () => void,
}

const styles = StyleSheet.create({
   button: {
      alignSelf: 'center',
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderWidth: 2,
      borderColor: '#10CFAE',
      borderRadius: 100,
   },

   text: {
      color: '#10CFAE',
      fontSize: 20,
   }
})

export default function Button({ title, pressHandler }: ButtonProps) {
   return (
      <TouchableOpacity style={styles.button} onPress={pressHandler}><Text style={styles.text}>{title}</Text></TouchableOpacity>
   )
}