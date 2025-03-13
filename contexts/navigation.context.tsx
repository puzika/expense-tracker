import { useState, Dispatch, SetStateAction, createContext } from "react";
import { View, Text } from "react-native";
import TransactionProvider from "./transactions.context";
import GoalsProvider from "./goals.context";
import Login from "../screens/login.screen";
import Register from "../screens/register.screen";
import Home from "../screens/home.screen";
import Transactions from "../screens/transactions.component";
import Add from "../screens/add.screen";
import Goals from "../screens/goals.screen";
import Statistics from "../screens/statistics.screen";
import HomeView from "../mvvm/homeView";

export type Screens = 
   | 'login'
   | 'register'
   | 'home'
   | 'transactions'
   | 'add'
   | 'goals'
   | 'statistics'

type NavigationContextType = {
   screen: Screens,
   setScreen: Dispatch<SetStateAction<Screens>>,
   prevScreens: Screens[],
   setPrevScreens: Dispatch<SetStateAction<Screens[]>>
}

const initialState: NavigationContextType = {
   screen: 'login',
   prevScreens: ['login'],
   setScreen: () => {},
   setPrevScreens: () => {},
}

export const NavigationContext = createContext<NavigationContextType>(initialState);

export default function Navigation() {
   const [screen, setScreen] = useState<Screens>('login');
   const [prevScreens, setPrevScreens] = useState<Screens[]>(['login']);
   
   const value = { screen, setScreen, prevScreens, setPrevScreens };
   
   let ScreenView = <Login />

   switch (screen) {
      case 'login':
         ScreenView = <Login />;
         break;
      case 'register':
         ScreenView = <Register />;
         break;
      case 'home':
         ScreenView = <HomeView />;
         break;
      case 'transactions':
         ScreenView = <Transactions />;
         break;
      case 'add':
         ScreenView = <Add />;
         break;
      case 'goals':
         ScreenView = <Goals />;
         break;
      case 'statistics':
         ScreenView = <Statistics />;
         break;
      default:
         ScreenView = <Text>No such screen found</Text>
   }

   return (
      <NavigationContext.Provider value={value}>
         <TransactionProvider>
            <GoalsProvider>
               <View style={{ flex: 1, backgroundColor: '#0B1725' }}>
                  { ScreenView }
               </View>
            </GoalsProvider>
         </TransactionProvider>
      </NavigationContext.Provider>
   )
}