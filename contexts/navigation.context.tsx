import { useState } from "react";
import { Dispatch, SetStateAction, createContext, ReactNode } from "react";
import { View, Text } from "react-native";
import TransactionProvider from "./transactions.context";
import Login from "../screens/login.screen";
import Register from "../screens/register.screen";
import Home from "../screens/home.screen";
import Transactions from "../screens/transactions.component";
import Add from "../screens/add.screen";

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
}

const initialState: NavigationContextType = {
   screen: 'login',
   setScreen: () => {},
}

export const NavigationContext = createContext<NavigationContextType>(initialState);

export default function Navigation() {
   const [screen, setScreen] = useState<Screens>('login');
   const value = { screen, setScreen };
   let ScreenView = <Login />

   switch (screen) {
      case 'login':
         ScreenView = <Login />;
         break;
      case 'register':
         ScreenView = <Register />;
         break;
      case 'home':
         ScreenView = <Home />;
         break;
      case 'transactions':
         ScreenView = <Transactions />;
         break;
      case 'add':
         ScreenView = <Add />;
         break;
      default:
         ScreenView = <Text>No such screen found</Text>
   }

   return (
      <NavigationContext.Provider value={value}>
         <TransactionProvider>
            <View style={{ flex: 1, backgroundColor: '#0B1725' }}>
               { ScreenView }
            </View>
         </TransactionProvider>
      </NavigationContext.Provider>
   )
}