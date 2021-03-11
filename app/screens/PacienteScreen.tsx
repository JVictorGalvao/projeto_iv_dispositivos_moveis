import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScreenContainer } from '../components/ScreenContainer';
import { Separator } from '../components/Separator';
import api from '../service/api';
import ScreenTitle from '../components/ScreenTitle';
import { View, Text, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import style from '../assets/styles';
import { ActivityIndicator, Button } from 'react-native-paper';
import { maxValue, minValue } from '../constants/Constants';
import BackButton from '../components/BackButton';


interface IPaciente {
    nome: string
    batimento_cardiaco: number
    oxigenacao: number
    ultrassom: string
}


export default function PacienteScreen() {
    const [paciente , setPaciente] = useState<IPaciente>([]);
    const route: any = useRoute()
    const navigation = useNavigation()


    useEffect( () => {
        const interval = setInterval(() => {
            api.get(`/paciente/${route.params?.index-1}`).then((response) =>
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
                    <Text style={(paciente.batimento_cardiaco >= maxValue || 
                        paciente.batimento_cardiaco <= minValue) ?
                        style.resultbad : style.resultgood}> {`${paciente.batimento_cardiaco}`} </Text>
                </View>
                <Separator vertical size={12}/>
                <View style={style.line}>
                    <Text style={style.text}>{'Oxigenação: '}</Text>
                    <Text style={ (paciente.oxigenacao >= maxValue || 
                        paciente.oxigenacao <= minValue) ?
                        style.resultbad : style.resultgood}>{`${paciente.oxigenacao}`}</Text>
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
                    params: {nome: paciente.nome, batimento_cardiaco: paciente.batimento_cardiaco,
                    oxigenacao: paciente.oxigenacao, ultrassom: paciente.ultrassom}})}>
                        Propor intervenção
                </Button>
        </ScreenContainer>
    )};}
  
  