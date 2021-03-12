import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScreenContainer } from '../components/ScreenContainer';
import { Separator } from '../components/Separator';
import api from '../service/api';
import { CardCuidador } from '../components/Card';
import {ScreenTitleButton} from '../components/ScreenTitle';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

interface IPaciente {
  nome: string
  batimento_cardiaco: number
  severidade_batimento_cardiaco: number
  oxigenacao: number
  severidade_oxigenacao: number
  ultrassom: string
  intervencao: string
}

export default function CuidadorHome() {
  const [paciente, setPaciente] = useState<IPaciente>([]);

  useEffect( () => {  
      const interval = setInterval(() => {
        api.get('/paciente/1').then((response) =>
        {console.log(response.data);
          setPaciente(response.data)
        });
      }, 5000)
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
        <ScreenTitleButton 
          title="Cuidador"/>
        <Separator vertical size={24}/>        
              <React.Fragment key={1}>
                <CardCuidador
                  index={1}
                  severidade_oxigenacao= {paciente.severidade_oxigenacao}
                  severidade_batimento_cardiaco = {paciente.severidade_batimento_cardiaco}
                  nome={paciente.nome}
                  batimento_cardiaco={paciente.batimento_cardiaco}
                  oxigenacao={paciente.oxigenacao}
                  ultrassom={paciente.ultrassom}
                />
              <Separator vertical size={24}/>
            </React.Fragment>
      </ScreenContainer>
    )
};}