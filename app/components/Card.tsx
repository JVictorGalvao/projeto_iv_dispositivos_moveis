import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Separator } from './Separator';

interface CardProps{
    index: string | number | null | undefined
    nome: string
    batimento_cardiaco: number
    oxigenacao: number
    cor: string
    ultrassom: string
}

const CardPaciente: React.FC<CardProps> = ({
    index,
    nome,
    batimento_cardiaco,
    oxigenacao,
    cor,
    ultrassom
}) => {
    const navigation = useNavigation()
    console.log(index)

    return(
        <Card style={{backgroundColor: cor}}> 
            <Card.Title titleStyle={{textAlign:'center'}} title={`${nome}`}/>
            <Card.Content>
                <Title>Batimentos: {batimento_cardiaco}</Title>
                <Title>Oxigenacao: {oxigenacao}</Title>
            </Card.Content>
            <Card.Actions>
                <Button mode='contained' color="white"
                    onPress={()=> navigation.navigate("NeurologistaStack", {
                    screen: "PacienteScreen",
                    params: {index: index}})}>
                        Ver dados
                </Button>
                <Separator size={56}/>
                <Button mode='contained' color="white"
                    onPress={()=> navigation.navigate("NeurologistaStack", {
                    screen: "IntervencaoScreen",
                    params: {index: index, nome: nome, batimento_cardiaco: batimento_cardiaco,
                    oxigenacao: oxigenacao, ultrassom: ultrassom}})}>
                        Propor intervenção
                </Button>
            </Card.Actions>
        </Card>      
    )
}

export default CardPaciente