import * as React from "react"
import { View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

interface BackButtonProps {
  onPress?: () => void
}

const BackButton: React.FC<BackButtonProps> = props => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        paddingTop: 14,
        paddingBottom: 0,
        justifyContent: "flex-start"
      }}
    >
      <MaterialIcons
        name="arrow-back"
        color="black"
        size={25}
        onPress={props.onPress || (() => navigation.goBack())}
      />
    </View>
  )
}

export default BackButton
