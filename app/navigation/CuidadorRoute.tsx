import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import CuidadorHome from "../screens/CuidadorHome"

const Stack = createStackNavigator()

interface CuidadorRouteProps { }


function CuidadorStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CuidadorHome" component={CuidadorHome} />
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
