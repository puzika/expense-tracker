export default class TransactionModel {
   private response: any;

   constructor() {
      this.response = null;
   }

   async get() {
      this.response = await fetch('http://localhost:8081/mvvm/transactions.json');

      return this.response;
   }
}