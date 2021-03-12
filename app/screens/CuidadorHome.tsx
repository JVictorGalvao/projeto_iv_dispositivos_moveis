import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScreenContainer } from '../components/ScreenContainer';
import { Separator } from '../components/Separator';
import api from '../service/api';
import CardPaciente from '../components/Card';
import {ScreenTitleButton} from '../components/ScreenTitle';
import { severoMax, severoMin } from '../constants/Constants';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function CuidadorHome() {
  const [pacientes, setPacientes] = useState([]);

  useEffect( () => {
    if(pacientes[0] == undefined){
      const interval = setInterval(() => {
        api.get('/pacientes').then((response) =>
        {console.log(response.data);
          setPacientes(response.data)
        });
      }, 1000)
      return () => clearInterval(interval)}
    else {
      const interval = setInterval(() => {
        api.get('/pacientes').then((response) =>
        {console.log(response.data);
          setPacientes(response.data)
        });
      }, 10000)
      return () => clearInterval(interval)
    }
  });

  if (pacientes[0] == undefined) {
    return (
      <ScreenContainer>
         <ScreenTitleButton 
          title="Cuidador "/>
          <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <ActivityIndicator animating={true} color={'black'} size={64}/>
          </View>
      </ScreenContainer>
      );
  }else {
    return(
      <ScreenContainer>
        <ScreenTitleButton 
          title="Cuidador"/>
        <Separator vertical size={24}/>
        {pacientes.map((
          paciente: { oxigenacao: number, batimento_cardiaco: number, nome: string, ultrassom: string,
            severidade_oxigenacao: number, severidade_batimento_cardiaco: number },
            index: string | number | null | undefined) => {
              return (         
              <React.Fragment key={index}>
                <CardPaciente
                  index={index}
                  severidade_oxigenacao= {paciente.severidade_oxigenacao}
                  severidade_batimento_cardiaco = {paciente.severidade_batimento_cardiaco}
                  nome={paciente.nome}
                  batimento_cardiaco={paciente.batimento_cardiaco}
                  oxigenacao={paciente.oxigenacao}
                  ultrassom={paciente.ultrassom}
                />
              <Separator vertical size={24}/>
            </React.Fragment>
          )
        })}
      </ScreenContainer>
    )
};}


