import { Dispatch, SetStateAction, ReactNode, useState } from "react";
import { createContext } from "react";

export type Transaction = {
   type: 'income' | 'expense',
   value: number,
   category: string,
   description: string,
   date: Date,
};

type TransactionsContextType = {
   transactions: Transaction[],
   setTransactions: Dispatch<SetStateAction<Transaction[]>>
};

export const TransactionContext = createContext<TransactionsContextType>({
   transactions: [],
   setTransactions: () => {},
});

type TransactionProviderProps = {
   children: ReactNode,
}

export default function TransactionProvider({ children }: TransactionProviderProps) {
   const lastTransactions: Transaction[] = [
      { value: 2500, type: 'income', category: 'Rent', description: 'Judy paid rent', date: new Date('2025-03-07') },
      { value: 500, type: 'expense', category: 'Food', description: 'Dinner at Stakehouse', date: new Date('2025-03-07') },
      { value: 1780, type: 'expense', category: 'Plumbing', description: 'Replaced sink', date: new Date('2025-03-01')},
      { value: 1000, type: 'expense', category: 'Groceries', description: 'BBQ Shopping', date: new Date('2025-03-07') },
      { value: 2500, type: 'income', category: 'Salary', description: '1st week salary', date: new Date('2025-03-01') },
   ]

   const [transactions, setTransactions] = useState<Transaction[]>(lastTransactions);
   const value = { transactions, setTransactions };

   return <TransactionContext.Provider value={value}>{ children }</TransactionContext.Provider>
}

