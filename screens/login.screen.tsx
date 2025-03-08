import { useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Dispatch, SetStateAction } from "react"
import Input from "../components/input.component"
import Button from "../components/button.component"
import Link from "../components/link.component"

type LoginProps = {
   navigate: Dispatch<SetStateAction<string>>
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 150,
      rowGap: 50,
   },

   heading: {
      fontSize: 35,
      color: 'white',
      textAlign: 'center',
   },

   form: {
      paddingHorizontal: 50,
      rowGap: 20,
   },

   alternative: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
   },
})

export default function Login({ navigate }: LoginProps) {
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');

   return (
      <View style={styles.container}>
         <Text style={styles.heading}>Log in</Text>
         <View style={styles.form}>
            <Input
               value={email}
               setter={setEmail}
               placeholder="Email"
            />
            <Input
               value={password}
               setter={setPassword}
               placeholder="Password"
            />
         </View>
         <View style={{rowGap: 20}}>
            <Button title='Log in' />
            <Text style={styles.alternative}>First time here? <Link title="Register" link={'register'} navigate={navigate} /></Text>
         </View>
      </View>
   )
}