import { useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Dispatch, SetStateAction } from "react"
import Input from "../components/input.component"
import Button from "../components/button.component"
import Link from "../components/link.component"

type RegisterProps = {
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

export default function Register({ navigate }: RegisterProps) {
   const [name, setName] = useState<string>('');
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [confirm, setConfirm] = useState<string>('');

   return (
      <View style={styles.container}>
         <Text style={styles.heading}>Register</Text>
         <View style={styles.form}>
            <Input
               value={name}
               setter={setName}
               placeholder="Name"
            />
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
            <Input
               value={confirm}
               setter={setConfirm}
               placeholder="Confirm password"
            />
         </View>
         <View style={{rowGap: 20}}>
            <Button pressHandler={() => navigate('home')} title='Register' />
            <Text style={styles.alternative}>Already have an account? <Link title="Log in" link={'login'} navigate={navigate} /></Text>
         </View>
      </View>
   )
}