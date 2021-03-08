import * as React from "react"
import { View, StyleSheet, Dimensions } from "react-native"
import { Platform } from "@unimodules/core"

interface PlainHeaderProps {}

const PlainHeader: React.FC<PlainHeaderProps> = props => {
  return <View style={styles.headerStyle} />
}

const styles = StyleSheet.create({
  headerStyle: {
    height: Platform.OS == "ios" ? 45 : 0,
    width: Dimensions.get("screen").width,
    backgroundColor: "white",
    position: Platform.OS == "ios" ? "absolute" : "relative",
    top: 0
  }
})

export default PlainHeader