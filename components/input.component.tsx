import { TextInput, StyleSheet } from "react-native";
import type { Dispatch, SetStateAction } from "react";

type InputProps = {
   setter: Dispatch<SetStateAction<string>>,
   value: string,
   placeholder: string,
}

const styles = StyleSheet.create({
   input: {
      fontSize: 20,
      color: 'white',
      borderBottomWidth: 2,
      borderBottomColor: 'white',
   }
}); 

export default function Input({ setter, value, placeholder }: InputProps) {
   return (
      <TextInput 
         value={value}
         onChangeText={setter}
         placeholder={placeholder}
         placeholderTextColor={'white'}
         style={styles.input}
      />
   )
}