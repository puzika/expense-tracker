import { getAllDocs } from "../utils/firebase";
import type { Transaction } from "./types";

export default class TransactionModel {
   private transactions: Transaction[];

   constructor() {
      this.transactions = [];
   }

   async get() {
      // const response = await fetch('http://localhost:8081/mvvm/transactions.json');
      // this.transactions = await response.json() as Transaction[];

      const q = await getAllDocs('transactions');

      q.forEach(doc => this.transactions.push(doc.data() as Transaction));

      return this.transactions;
   }
}