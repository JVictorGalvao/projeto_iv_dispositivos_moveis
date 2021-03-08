import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

interface CardProps{
    nome: string
    batimento_cardiaco: number
    oxigenacao: number
}

const CardPaciente: React.FC<CardProps> = ({
    nome,
    batimento_cardiaco,
    oxigenacao
}) => {
    return(
        <Card> 
            <Card.Title title={`Paciente: ${nome}`}/>
            <Card.Content>
                <Title>Batimentos: {batimento_cardiaco}</Title>
                <Title>Oxigenacao: {oxigenacao}</Title>
            </Card.Content>
            <Card.Actions>
                <Button>Ver dados</Button>
                <Button>Propor intervenção</Button>
            </Card.Actions>
        </Card>      
    )
}

export default CardPaciente