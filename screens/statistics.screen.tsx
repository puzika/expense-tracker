import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
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

   main: {
      paddingHorizontal: 30,
   },

   stats: {
      height: 250,
      columnGap: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 30,
   },

   statBar: {
      width: 20,
      backgroundColor: '#10cfae',
   },

   legend: {
      flexDirection: 'row',
      columnGap: 30,
      rowGap: 10,
      flexWrap: 'wrap',
   },

   legendItem: {
      flexDirection: 'row',
      columnGap: 10,
   },

   square: {
      width: 15,
      aspectRatio: 1,
   },

   text: {
      color: 'white',
      fontSize: 16,
   },

   type: {
      backgroundColor: '#1f303a',
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderWidth: 2,
      borderRadius: 100,
   },
})


export default function Statistics() {
   const { transactions } = useContext(TransactionContext);
   const [type, setType] = useState<'income' | 'expense'>('income');

   let total = 0;
   const categories: Map<string, number> = new Map();
   const [period, setPeriod] = useState<string>('Week');
   const periods: string[] = ['Today', 'Week', 'Month', 'Year'];

   const randomNum = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1) + min);
   }

   const getColor = (): string => {
      return `rgb(${randomNum(100, 255)},${randomNum(100, 255)},${randomNum(100, 255)})`;
   }

   for (const transaction of transactions) {
      if (type !== transaction.type || !isInPeriod(period, transaction.date)) continue;

      categories.set(transaction.category, (categories.get(transaction.category) || 0) + transaction.value);
      total += transaction.value;
   }

   const categoriesArr = [...categories.entries()].map(([category, sum]): [string, number, string] => [category, sum, getColor()]);

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
            <ScrollView style={styles.main}>
               <View style={styles.stats}>
                  {
                     categoriesArr.map(([category, sum, color]) => (
                        <View key={category} style={[styles.statBar, { height: 250 * sum / total, backgroundColor: color }]}></View>
                     ))
                  }
               </View>
               <View style={styles.legend}>
                  {
                     categoriesArr.map(([category, _, color]) => (
                        <View style={styles.legendItem}>
                           <View style={[styles.square, { backgroundColor: color }]}></View>
                           <Text style={styles.text}>{category}</Text>
                        </View>
                     ))
                  }
               </View>
               <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50}}>
                  <TouchableOpacity onPress={() => setType('income')} style={[styles.type, { backgroundColor: type === 'income' ? '#10cfae' : '#1f303a', borderColor: '#10cfae'},]}>
                     <Text style={styles.text}>Income</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setType('expense')} style={[styles.type, { backgroundColor: type === 'expense' ? '#ff7b7b' : '#1f303a', borderColor: '#ff7b7b'}]}>
                     <Text style={styles.text}>Expense</Text>
                  </TouchableOpacity>
               </View>
            </ScrollView>
         </View>
         <NavigationBar />
      </View>
   )
}