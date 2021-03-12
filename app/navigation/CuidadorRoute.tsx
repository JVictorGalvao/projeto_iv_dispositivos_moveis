import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import CuidadorHome from "../screens/CuidadorHome"
import PacienteScreen from "../screens/PacienteScreen"
import IntervencaoScreen from "../screens/IntervencaoScreen"

const Stack = createStackNavigator()

interface CuidadorRouteProps { }


function CuidadorStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CuidadorHome" component={CuidadorHome} />
            <Stack.Screen name="PacienteScreen" component={PacienteScreen} />
            <Stack.Screen name="IntervencaoScreen" component={IntervencaoScreen}/>
        </Stack.Navigator>
    )
}

const CuidadorRoute: React.FC<CuidadorRouteProps> = props => {
  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }} 
    >
      <Stack.Screen name="CuidadorStack" component={CuidadorStack} />
    </Stack.Navigator>
  ) 
}
export default CuidadorRoute
