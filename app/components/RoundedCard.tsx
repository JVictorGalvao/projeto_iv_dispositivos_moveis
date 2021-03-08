import React, { Children } from "react"
import {
  View,
  StyleSheet,
  ViewStyle,
  Text,
  TextStyle,
  ImageURISource,
  Image,
  ImageSourcePropType,
  Dimensions,
  PixelRatio
} from "react-native"

export interface RoundedCardProps {
  style?: ViewStyle
  placeholder?: boolean
  anyHeight?: boolean
}

const RoundedCard: React.FC<RoundedCardProps> = props => {
    return(
      <View
        style={[
          styles.cardContainer,
          props.style,
          props.anyHeight && {
            minHeight: undefined
          }
        ]}
      >
        {props.children}
      </View>
    )
  }

  const CardBody: React.FC<{
    textStyle?: TextStyle
    style?: ViewStyle
  }> = props => {
    return (
      <View style={[styles.bodyContainer, props.style]}>
        <Text
          style={[
            {
              textAlign: "center",
              lineHeight: 18,
              fontSize: 15
            },
            props.textStyle
          ]}
        >
          {props.children}
        </Text>
      </View>
    )
  }

  const CardTitleContainer: React.FC<{
    imageSource?: ImageSourcePropType
  }> = props => {
    return (
      <View style={{ flexDirection: "row" }}>
        {props.imageSource && (
          <View
            style={{
              width: 48,
              height: 60,
              top: 8,
              marginRight: 12,
              borderRadius: 12
            }}
          >
            <Image
              source={props.imageSource}
              style={{
                width: 48,
                borderRadius: 12,
                height: 60
              }}
            />
          </View>
        )}
        <View
          style={{
            paddingBottom: 16
          }}
        >
          {props.children}
        </View>
      </View>
    )
  }

  const CardTitle: React.FC<{
    style?: ViewStyle
    textStyle?: TextStyle
    fullText?: boolean
    subtitle?: React.ReactNode
    element?: boolean
  }> = props => {
    const numberOfLines = props.fullText ? undefined : 3
    return (
      <View style={[styles.titleContainer, props.style]}>
        {props.element ? (
          props.children
        ) : (
          <Text
            numberOfLines={numberOfLines}
            style={[styles.header, props.textStyle]}
          >
            {props.children}
          </Text>
        )}
      </View>
    )
  }
  

  const styles = StyleSheet.create({
    titleContainer: {
      flex: 0,
      paddingBottom: 4,
      backgroundColor: "transparent",
      flexShrink: 1
    },
    header: {
        textAlign: "center",
        lineHeight: 18,
        fontSize: 18,
        color: 'black',
        fontStyle: 'normal'
      },
    footerContainer: {
      padding: 0,
      margin: 0,
      flex: 0,
      paddingTop: 4,
      flexDirection: "row",
      alignContent: "space-between",
      flexWrap: "wrap",
      backgroundColor: "white",
      justifyContent: "flex-end"
    },
    bodyContainer: {
      justifyContent: "center",
      backgroundColor: "white",
      flexGrow: 1,
      flex: 1
    },
    cardContainer: {
      minHeight: 200,
      display: "flex",
      backgroundColor: "white",
      borderRadius: 10,
      paddingHorizontal: 22,
      paddingVertical: 18,
      justifyContent: "center",
      elevation: 2,
      shadowColor: "#518091",
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 16,
      shadowOpacity: 0.2
    }
  })

export { CardBody, CardTitle, CardTitleContainer }

export default RoundedCard

