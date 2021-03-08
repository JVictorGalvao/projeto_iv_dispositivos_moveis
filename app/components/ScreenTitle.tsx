import * as React from "react"
import { StyleSheet, Text, View, ViewStyle } from "react-native"


interface ScreenContainerProps {
  title: string
  centerSubtitle?: boolean
  subtitle?: string
  style?: ViewStyle
}

const ScreenTitle: React.SFC<ScreenContainerProps> = props => {
  return (
    <View style={[styles.titleContainer, props.style]}>
      <Text style={styles.header}>{props.title}</Text>
      {props.subtitle && (
        <Text
          style={[
            styles.subtitle,
            {
              textAlign: props.centerSubtitle ? "center" : undefined,
              color: props.centerSubtitle ? "#414141" : undefined,
              fontWeight: props.centerSubtitle ? "bold" : undefined,
              fontSize: 16
            }
          ]}
        >
          {props.subtitle}
        </Text>
      )}
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
    paddingBottom: 16
  },
  header: {
    lineHeight: 40,
    fontSize: 40,
    letterSpacing: 0,
  },
})

export default ScreenTitle
