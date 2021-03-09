import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScreenContainer } from '../components/ScreenContainer';
import { Separator } from '../components/Separator';
import api from '../service/api';
import ScreenTitle from '../components/ScreenTitle';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function PacienteScreen() {
    const [paciente, setPaciente] = useState<{ oxigenacao: number; batimento_cardiaco: number; nome: string; ultrassom: string }>([]);
    const [dados, setDados] = useState<Number>();
    const route: any = useRoute()
    useEffect( () => {
        api.get(`/paciente/${route.params?.index-1}`).then((response) =>
        {console.log(response.data);
          setPaciente(response.data)
        });    
    }, []);

    return( 
            <ScreenContainer>
                <ScreenTitle title={`${paciente.nome}`}/>
                    <Text style={{justifyContent:'center'}}>{`BPM: ${paciente.batimento_cardiaco}`}</Text>
                    <Text style={{justifyContent:'center'}}>{`BPM: ${paciente.oxigenacao}`}</Text>
                    <Image 
                    style={{width:300, height:300}}
                    source={{uri: `${paciente.ultrassom}`}}/>

            </ScreenContainer>
    )};
  
  