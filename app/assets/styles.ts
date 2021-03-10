import { StyleSheet } from "react-native"

  const style = StyleSheet.create({
    imagem: {
      flex: 1,
      alignItems: "center"
    },
    text: {
      color: "#000",
      fontSize: 20,
    },
    result:{
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold', 
    },
    resultgood:{
      color: "#a5d610",
      fontSize: 20,
      fontWeight: 'bold', 
    },
    resultbad:{
      color: "#ff726f",
      fontSize: 20,
      fontWeight: 'bold', 
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center'
    }
  });

  export default style;