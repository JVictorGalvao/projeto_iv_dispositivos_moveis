import React, { useEffect } from "react"
import { Dimensions } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import NeurologistaHome from "../screens/NeurologistaHome"

const Stack = createStackNavigator()

interface ReviewerRoutesProps { }

// function HomeNeurologistaStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="HomeNeurologista" component={NeurologistaHome} />
//     </Stack.Navigator>
//   )
// }

function NeurologistaStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="NeurologistaHome" component={NeurologistaHome} />
        </Stack.Navigator>
    )
}

const NeurologistaRoute: React.FC<ReviewerRoutesProps> = props => {
  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }} 
    >
      <Stack.Screen name="NeurologistaStack" component={NeurologistaStack} />
    </Stack.Navigator>
  ) 
}
export default NeurologistaRoute
