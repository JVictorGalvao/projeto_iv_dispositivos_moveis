import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScreenContainer } from '../components/ScreenContainer';
import { Separator } from '../components/Separator';
import api from '../service/api';
import ScreenTitle from '../components/ScreenTitle';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function PacienteScreen() {
    const [paciente , setPaciente] = useState([]);
    const route: any = useRoute()

    useEffect( () => {
        const interval = setInterval(() => {
            api.get(`/paciente/${route.params?.index-1}`).then((response) =>
            {console.log(response.data);
              setPaciente(response.data)
          });
        }, 1000)
        return () => clearInterval(interval)
      });

    return( 
        <ScreenContainer>
            <ScreenTitle title={`${paciente.nome}`}/>
            <Separator vertical size={24}/>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{justifyContent:'center', fontSize:24}}>{`Batimentos por minuto: ${paciente.batimento_cardiaco}`}</Text>
                <Separator vertical size={24}/>
                <Text style={{justifyContent:'center', fontSize:24}}>{`Oxigenação: ${paciente.oxigenacao}`}</Text>
                <Separator vertical size={24}/>   
                <Text style={{justifyContent:'center', fontSize:24}}>{`Ultrassom`}</Text>
                <Separator vertical size={12}/>   
                <Image 
                    style={{width:300, height:300}}
                    source={{uri: `${paciente.ultrassom}`}}/>
            </View>
        </ScreenContainer>
    )};
  
  