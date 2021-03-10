import React, { useEffect } from "react"
import { Dimensions } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import NeurologistaHome from "../screens/NeurologistaHome"
import PacienteScreen from "../screens/PacienteScreen"
import IntervencaoScreen from "../screens/IntervencaoScreen"

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
            <Stack.Screen name="PacienteScreen" component={PacienteScreen} />
            <Stack.Screen name="IntervencaoScreen" component={IntervencaoScreen}/>
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
