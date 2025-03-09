import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TransactionContext } from "../contexts/transactions.context";
import Input from "../components/input.component";
import NavigationBar from "../components/navigation.component";
import ReturnBar from "../components/return-bar.component";
import Button from "../components/button.component";

const styles = StyleSheet.create({
   screen: {
      flex: 1,
   },

   container: {
      flex: 1,
      padding: 20,
   },

   form: {
      rowGap: 20,
      paddingHorizontal: 15,
      marginTop: 100,
   },

   datePicker: {
      fontSize: 20,
      color: 'white',
      borderBottomWidth: 2,
      borderBottomColor: 'white',
   },

   type: {
      backgroundColor: '#1f303a',
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderWidth: 2,
      borderRadius: 100,
   },

   text: {
      color: 'white',
      fontSize: 20,
   },

   buttons: {
      gap: 20,
      paddingHorizontal: 15,
      marginTop: 50,
   }
})


export default function Add() {
   const { setTransactions } = useContext(TransactionContext);

   const [value, setValue] = useState<string>('');
   const [category, setCagegory] = useState<string>('');
   const [description, setDescription] = useState<string>('');
   const [date, setDate] = useState<string>('');
   const [type, setType] = useState<'income' | 'expense'>('income');

   const handleAdd = () => {
      if (
         value === '' ||
         category === '' ||
         description === '' ||
         date === ''
      ) return;

      setTransactions(currTransactions => {
         const copy = currTransactions.map(transaction => ({...transaction}));
         copy.push({ value: Number(value), category, description, date: new Date(date), type});

         return copy;
      })
   }

   return (
      <View style={styles.screen}>
         <View style={styles.container}>
            <ReturnBar title={'Add'} />
            <View style={styles.form}>
               <Input 
                  value={value}
                  placeholder="Transaction value"
                  setter={setValue}
               />
               <Input 
                  value={category}
                  placeholder="Category"
                  setter={setCagegory}
               />
               <Input 
                  value={description}
                  placeholder="Description"
                  setter={setDescription}
               />
               <Input 
                  value={date}
                  placeholder="Date (yyyy-mm-dd)"
                  setter={setDate}
               />
            </View>
            <View style={styles.buttons}>
               <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                  <TouchableOpacity onPress={() => setType('income')} style={[styles.type, { backgroundColor: type === 'income' ? '#10cfae' : '#1f303a', borderColor: '#10cfae'},]}>
                     <Text style={styles.text}>Income</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setType('expense')} style={[styles.type, { backgroundColor: type === 'expense' ? '#ff7b7b' : '#1f303a', borderColor: '#ff7b7b'}]}>
                     <Text style={styles.text}>Expense</Text>
                  </TouchableOpacity>
               </View>
               <Button title={'Add'} pressHandler={handleAdd}/>
            </View>
         </View>
         <NavigationBar />
      </View>
   )
}