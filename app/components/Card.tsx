import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { Alert, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Separator } from './Separator';

interface CardProps{
    index: string | number | null | undefined
    nome: string
    batimento_cardiaco: number
    oxigenacao: number
    severidade_oxigenacao: number
    severidade_batimento_cardiaco: number
    ultrassom: string
}

const CardPaciente: React.FC<CardProps> = ({
    index,
    nome,
    batimento_cardiaco,
    oxigenacao,
    severidade_batimento_cardiaco,
    severidade_oxigenacao,
    ultrassom,
}) => {
    const navigation = useNavigation()
    const alertaSevero = () =>{
        Alert.alert(
            `${nome} está em estado SEVERO!`,
            "",
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Propor Intervenção", onPress: () => navigation.navigate("NeurologistaStack", {
                screen: "IntervencaoScreen",
                params: {index: index, nome: nome, batimento_cardiaco: batimento_cardiaco,
                oxigenacao: oxigenacao, ultrassom: ultrassom, severidade_oxigenacao: severidade_oxigenacao,
                severidade_batimento_cardiaco: severidade_batimento_cardiaco}})}
            ],
            { cancelable: false }
          );
    }
    const alertaModerado = () =>{
        Alert.alert(
            `${nome} está em estado MODERADO!`,
            "",
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Propor Intervenção", onPress: () => navigation.navigate("NeurologistaStack", {
                screen: "IntervencaoScreen",
                params: {index: index, nome: nome, batimento_cardiaco: batimento_cardiaco,
                oxigenacao: oxigenacao, ultrassom: ultrassom, severidade_oxigenacao: severidade_oxigenacao,
                severidade_batimento_cardiaco: severidade_batimento_cardiaco}})}
            ],
            { cancelable: false }
          );
    }
    console.log(index)
    return(
        <Card style={{backgroundColor: ((severidade_oxigenacao == 1 || severidade_batimento_cardiaco == 1) ? '#ff726f' : 
        ((severidade_oxigenacao == 2 || severidade_batimento_cardiaco == 2) ? "#ffff80" : "#d7f2f3"))}}> 
            <Card.Title titleStyle={{textAlign:'center'}} title={`${nome}`}/>
            <Card.Content>
                <Title>Batimentos: {batimento_cardiaco}</Title>
                <Title>Oxigenacao: {oxigenacao}</Title>
            </Card.Content>
            <Card.Actions style={{ flexDirection: 'row',
                justifyContent:'space-between', alignItems: 'center'}}>
                <Button mode='contained' color="white"
                    onPress={()=> navigation.navigate("NeurologistaStack", {
                    screen: "PacienteScreen",
                    params: {index: index}})}>
                        Ver dados
                </Button>
                <Button mode='contained' color="white"
                    onPress={()=> navigation.navigate("NeurologistaStack", {
                    screen: "IntervencaoScreen",
                    params: {index: index, nome: nome, batimento_cardiaco: batimento_cardiaco,
                    oxigenacao: oxigenacao, ultrassom: ultrassom, severidade_oxigenacao: severidade_oxigenacao,
                    severidade_batimento_cardiaco: severidade_batimento_cardiaco}})}>
                        Propor intervenção
                </Button>
            </Card.Actions>
        {((severidade_oxigenacao == 1 || severidade_batimento_cardiaco == 1) ? alertaSevero() : 
        ((severidade_oxigenacao == 2 || severidade_batimento_cardiaco == 2) ? alertaModerado() : null))}
        </Card>
    )
}

const CardCuidador: React.FC<CardProps> = ({
    index,
    nome,
    batimento_cardiaco,
    oxigenacao,
    severidade_batimento_cardiaco,
    severidade_oxigenacao,
    ultrassom,
}) => {
    const navigation = useNavigation()
    return(
        <Card style={{backgroundColor: ((severidade_oxigenacao == 1 || severidade_batimento_cardiaco == 1) ? '#ff726f' : 
        ((severidade_oxigenacao == 2 || severidade_batimento_cardiaco == 2) ? "#ffff80" : "#d7f2f3"))}}> 
            <Card.Title titleStyle={{textAlign:'center'}} title={`${nome}`}/>
            <Card.Content>
                <Title>Batimentos: {batimento_cardiaco}</Title>
                <Title>Oxigenacao: {oxigenacao}</Title>
            </Card.Content>
            <Card.Actions style={{ flexDirection: 'row',
                justifyContent:'space-between'}}>
                <Button mode='contained' color="white"
                    onPress={()=> navigation.navigate("CuidadorStack", {
                    screen: "PacienteScreen",
                    params: {index: index-1}})}>
                        Ver dados
                </Button>
                <Button mode='contained' color="white"
                    onPress={()=> navigation.navigate("CuidadorStack", {
                    screen: "IntervencaoScreen",
                    params: {index: index, nome: nome, batimento_cardiaco: batimento_cardiaco,
                    oxigenacao: oxigenacao, ultrassom: ultrassom, severidade_oxigenacao: severidade_oxigenacao,
                    severidade_batimento_cardiaco: severidade_batimento_cardiaco}})}>
                        Notificar alterações
                </Button>
               
            </Card.Actions>
        </Card>
    )
}


export  {CardPaciente, CardCuidador}