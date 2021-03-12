import React, { useState } from "react"
import { Ionicons } from '@expo/vector-icons'; 
import { View } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import { Separator } from "./Separator";
import api from "../service/api";
import { Alert } from "react-native";

interface TextInputProps {
  paciente_id: string | number | null | undefined
  status_intervencao?: number | undefined
}

export const SimpleTextInput: React.FC<TextInputProps> = props => {
    const [text, setText] = useState('');

    const EnvioOk = () =>{
      Alert.alert(
          "Intervenção enviada!",
          "",
          [
            {
              text: "Ok",
              onPress: () => console.log("Ok"),
            },
          ],
        );
      setText('')
  }

    const handlePut = () => {
      api.put(`/paciente/${props.paciente_id}/intervencao`, {
        intervencao: text,
      }).then((response) => console.log(response.data)).then(EnvioOk)
  }

    return(
    <TextInput
      mode='outlined'
      label="Digite a intervenção proposta aqui..."
      value={text}
      onChangeText={text => setText(text)}
      multiline
      numberOfLines={6}
      theme={{ colors: { primary: '#000'}}}
      selectionColor='#a9a9a9'
      right={<TextInput.Icon 
        name={()=> <Ionicons name="md-send" size={24} color="#000" />}
        onPress={() => handlePut()} />}
      /> 
    );

} 

export default SimpleTextInput