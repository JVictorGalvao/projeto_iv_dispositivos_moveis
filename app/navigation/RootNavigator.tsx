import React, { useContext, useState } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import NeurologistaRoute from "./NeurologistaRoute"
import { Context } from '../service/Provider';
import CuidadorRoute from "./CuidadorRoute";
import Login from "../screens/Login";

interface RootNavigatorProps {}

const Stack = createStackNavigator()

export const RootNavigator: React.FC<RootNavigatorProps> = () => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);
  const { isNeurologista } = useContext(Context);

  return (
    <NavigationContainer>
        {user ? (isNeurologista ? (<NeurologistaRoute/> ) : (<CuidadorRoute/>)) : (
        <Stack.Navigator screenOptions={{
          header: ()=> null
        }}>
          <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>)}
      </NavigationContainer>
  );
}