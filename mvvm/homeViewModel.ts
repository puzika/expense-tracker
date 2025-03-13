import { useState, useEffect } from "react";
import TransactionModel from "./transactionModel";
import { Transaction } from "./types";

export function useGetTransactions() {
   const [transactions, setTransactions] = useState<Transaction[]>([]);

   const getTransactions = async () => {
      const transactionModel = new TransactionModel();
      
      const response = await transactionModel.get();
      const data = await response.json() as Transaction[];

      setTransactions(data);
   }

   useEffect(() => {
      getTransactions();
   }, []);

   return transactions;
}