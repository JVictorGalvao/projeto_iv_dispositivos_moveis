import React, { useState } from "react"
import { Ionicons } from '@expo/vector-icons'; 
import { View } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import { Separator } from "./Separator";

interface TextInputProps {

}

export const SimpleTextInput: React.FC<TextInputProps> = props => {
    const [text, setText] = useState('');

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
        onPress={() => {}} />}
      /> 
    );

} 

export default SimpleTextInput