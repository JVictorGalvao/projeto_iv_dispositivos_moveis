import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import NeurologistaRoute from "./NeurologistaRoute"

interface RootNavigatorProps {}

const Stack = createStackNavigator()

export const RootNavigator: React.FC<RootNavigatorProps> = () => {
  return (
    <NavigationContainer>
      <NeurologistaRoute/>
    </NavigationContainer>
  )
}
