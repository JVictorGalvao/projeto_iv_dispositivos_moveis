import React, { useContext } from "react"
import { ActivityIndicator, StyleSheet, Text, View, ViewStyle } from "react-native"
import { Button } from "react-native-paper"
import { AntDesign, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Context } from "../service/Provider";


interface ScreenContainerProps {
  title: string
  style?: ViewStyle
  situacao?: number
}

const ScreenTitleButton: React.FC<ScreenContainerProps> = props => {
  const {logout} = useContext(Context)

  return (
    <View style={[styles.titleContainer, props.style]}>
      <Text style={styles.header}>{props.title}</Text>
      <Button color="#d7f2f3" onPress={() => {logout();}}>{<MaterialIcons name="logout" size={24} color="black" />}</Button>
      
    </View>
  )
}

const ScreenTitleIntervencao: React.FC<ScreenContainerProps> = props => {
  return (
    <View style={[styles.titleContainer, props.style]}>
      <Text style={styles.header}>{props.title}</Text>
      {props.situacao == 1 ? (<FontAwesome name="square-o" size={24} color="black" />): 
      (props.situacao == 2 ? <FontAwesome name="check-square-o" size={24} color="black" /> : null)}
    </View>
  )
}

const ScreenTitle: React.FC<ScreenContainerProps> = props => {
  return (
    <View style={[styles.titleContainer, props.style]}>
      <Text style={styles.header}>{props.title}</Text>      
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 15,
    letterSpacing: 0.15,
    paddingVertical: 8
  },
  titleContainer: {
    paddingTop: 30,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  header: {
    lineHeight: 40,
    fontSize: 40,
    letterSpacing: 0,
  },
})

export {ScreenTitle , ScreenTitleButton, ScreenTitleIntervencao} 
