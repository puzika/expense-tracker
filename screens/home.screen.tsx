import { Dispatch, SetStateAction } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Navigation from "../components/navigation.component";

type HomeProps = {
   navigate: Dispatch<SetStateAction<string>>
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
   },

   container: {
      flex: 1
   },

   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20
   },

   headerText: {
      color: 'white',
   },

   balance: {
      color: '#10cfae',
      fontSize: 40,
      textAlign: 'center',
      marginTop: 80,
   },

   balanceSubscript: {
      color: 'white', 
      fontSize: 16,
      textAlign: 'center',
   },

   transactions: {
      marginTop: 50,
      paddingHorizontal: 20,
      gap: 10
   },

   transaction: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 10,
      backgroundColor: '#1f303a',
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderWidth: 2,
      borderRadius: 100,
   },

   transactionValue: {
      fontSize: 30,
      color: 'white',
      marginRight: 'auto',
   },

   category: {
      color: 'white',
      fontSize: 20,
   }
})

export default function Home({ navigate }: HomeProps) {
   const lastTransactions: { value: number, type: 'income' | 'expense', category: string }[] = [
      { value: 2500, type: 'income', category: 'Rent' },
      { value: 500, type: 'expense', category: 'Food' },
      { value: 1780, type: 'expense', category: 'Plumbing' },
      { value: 1000, type: 'expense', category: 'Groceries' },
      { value: 2500, type: 'income', category: 'Rent' },
   ]

   return (
      <View style={styles.screen}>
         <ScrollView style={styles.container}>
            <View style={styles.header}>
               <Text style={styles.headerText}>TOLIBJON</Text>
               <Text style={styles.headerText}>SIGN OUT</Text>
            </View>
            <Text style={styles.balance}>$10000</Text>
            <Text style={styles.balanceSubscript}>Balance</Text>
            <View style={styles.transactions}>
               {
                  lastTransactions.map(({ value, type, category}) => (
                     <View 
                        key={Math.random().toString(36).slice(2)}
                        style={{...styles.transaction, borderColor: type === 'income' ? '#10CFAE' : '#FF7B7B' }}
                     >
                        <Text style={{ fontSize: 30, color: type === 'income' ? '#10CFAE' : '#FF7B7B'}}>{type === 'income' ? '+': '-'}</Text>
                        <Text style={styles.transactionValue}>${value}</Text>
                        <Text style={styles.category}>{category}</Text>
                     </View>
                  ))
               }
            </View>
         </ScrollView>
         <Navigation navigate={navigate} />
      </View>
   )
}