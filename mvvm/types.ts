export type Transaction = {
   value: number,
   category: string,
   description: string,
   type: 'income' | 'expense',
   date: string,
}