import { useState, useContext } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { TransactionContext } from "../contexts/transactions.context";
import isInPeriod from "../date";
import NavigationBar from "../components/navigation.component";
import ReturnBar from "../components/return-bar.component";
import Dropdown from "../components/dropdown.component";

const styles = StyleSheet.create({
   screen: {
      flex: 1,
   },

   container: {
      flex: 1,
      padding: 20,
   },

   transaction: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#1f303a',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 2,
      borderRadius: 20,
      marginBottom: 20,
   },

   category: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 25,
   },

   description: {
      color: 'white',
      fontSize: 16,
   },

   value: {
      color: 'white',
      fontSize: 25,
   }
})


export default function Transactions() {
   const { transactions } = useContext(TransactionContext);
   const [period, setPeriod] = useState<string>('Week');
   const periods: string[] = ['Today', 'Week', 'Month', 'Year'];

   return (
      <View style={styles.screen}>
         <View style={styles.container}>
            <ReturnBar title={'Transactions'} />
            <Dropdown 
               title={period} 
               additionalStyles={{ marginTop: 30, alignSelf: 'flex-start' }} 
               setter={setPeriod}
               items={periods}
            />
            <ScrollView style={{ marginTop: 50 }}>
               {
                  transactions.map(({ type, value, category, description, date}) => (
                     isInPeriod(period, date) && (
                        <View 
                           key={Math.random().toString(36).slice(2)}
                           style={[styles.transaction, { borderColor: type === 'income' ? '#10CFAE' : '#FF7B7B' }]}
                        >
                           <View style={{ rowGap: 5 }}>
                              <Text style={styles.category}>{ category }</Text>
                              <Text style={styles.description}>{ description }</Text>
                           </View>
                           <Text style={styles.value}>${ value }</Text>
                        </View>
                     )
                  ))
               }
            </ScrollView>
         </View>
         <NavigationBar />
      </View>
   )
}