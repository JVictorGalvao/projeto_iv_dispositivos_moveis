import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScreenContainer } from '../components/ScreenContainer';
import { Separator } from '../components/Separator';
import api from '../service/api';
import {ScreenTitle} from '../components/ScreenTitle';
import { View, Text, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import style from '../assets/styles';
import { ActivityIndicator, Button } from 'react-native-paper';
import BackButton from '../components/BackButton';


interface IPaciente {
    nome: string
    batimento_cardiaco: number
    severidade_batimento_cardiaco: number
    oxigenacao: number
    severidade_oxigenacao: number
    ultrassom: string
    intervencao: string
}


export default function PacienteScreen() {
    const [paciente , setPaciente] = useState<IPaciente>([]);
    const route: any = useRoute()
    const navigation = useNavigation()

    useEffect( () => {
        const interval = setInterval(() => {
            api.get(`/paciente/${route.params?.index+1}`).then((response) =>
            {console.log(response.data);
              setPaciente(response.data)
          });
        }, 1000)
        return () => clearInterval(interval)
      });
      
    if (paciente.ultrassom == undefined) {
        return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <ActivityIndicator animating={true} color={'black'} size={64}/>
        </View>
          );
    } else {
    return( 
        <ScreenContainer>
            <BackButton />
            <ScreenTitle title={`${paciente.nome}`}/>
            <Separator vertical size={24}/>
            <View style={style.line}>
                    <Text style={style.text}>{'Batimentos por minuto: '}</Text>
                    <Text style={{color: ((paciente.severidade_batimento_cardiaco == 1) ? '#ff726f' : 
        ((paciente.severidade_batimento_cardiaco == 2) ? "#ffce00" : "#a5d610")),
        fontSize: 20, fontWeight: 'bold'}}> {`${paciente.batimento_cardiaco}`} </Text>
                </View>
                <Separator vertical size={12}/>
                <View style={style.line}>
                    <Text style={style.text}>{'Oxigenação: '}</Text>
                    <Text style={{
                        color: ((paciente.severidade_oxigenacao == 1) ? '#ff726f' : 
        ((paciente.severidade_oxigenacao == 2) ? "#ffce00" : "#a5d610")),
        fontSize: 20, fontWeight: 'bold'}}>{`${paciente.oxigenacao}`}</Text>
                </View>
                <Separator vertical size={12}/>
                <View style={style.line}>
                    <Text style={style.text}>{'Ultrassom: '}</Text>
                </View>
                <Separator vertical size={24}/>
                <View style={{alignItems: 'center'}}>
                    <Image 
                        style={{width:300, height:300}}
                        source={{uri: `${paciente.ultrassom}`}}/>
                </View>
                <Separator vertical size={24}/>
                <Button mode='contained' color="#d7f2f3"
                    onPress={()=> navigation.navigate("NeurologistaStack", {
                    screen: "IntervencaoScreen",
                    params: {index: route.params?.id, nome: paciente.nome, batimento_cardiaco: paciente.batimento_cardiaco,
                    oxigenacao: paciente.oxigenacao, ultrassom: paciente.ultrassom}})}>
                        Propor intervenção
                </Button>
        </ScreenContainer>
    )};}
  
