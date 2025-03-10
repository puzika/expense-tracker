import { Dispatch, SetStateAction, ReactNode, useState } from "react";
import { createContext } from "react";

type Goal = {
   setDate: string,
   dueDate: string,
   description: string,
}

type GoalsContextType = {
   goals: Goal[],
   setGoals: Dispatch<SetStateAction<Goal[]>>,
}

export const GoalsContext = createContext<GoalsContextType>({
   goals: [],
   setGoals: () => {},
});

type GoalsProviderProps = {
   children: ReactNode,
}

export default function GoalsProvider({ children }: GoalsProviderProps) {
   const temp: Goal[] = [
      { setDate: '2025-02-01', dueDate: '2025-03-01', description: 'Save $1000 by the end of this month'},
      { setDate: '2025-02-01', dueDate: '2026-02-01', description: 'Save $25000 by the end of this year'}
   ];

   const [goals, setGoals] = useState<Goal[]>(temp);
   const value = { goals, setGoals };

   return <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>
}