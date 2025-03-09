import { useState, useContext } from "react"
import { Text, View, StyleSheet } from "react-native"
import { NavigationContext } from "../contexts/navigation.context"
import Input from "../components/input.component"
import Button from "../components/button.component"
import Link from "../components/link.component"

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

export default function Login() {
   const { setScreen } = useContext(NavigationContext);
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
            <Button pressHandler={() => setScreen('home')} title='Log in' />
            <Text style={styles.alternative}>First time here? <Link title="Register" link={'register'}/></Text>
         </View>
      </View>
   )
}