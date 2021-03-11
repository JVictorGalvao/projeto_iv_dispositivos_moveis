import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScreenContainer } from '../components/ScreenContainer';
import { Separator } from '../components/Separator';
import api from '../service/api';
import CardPaciente from '../components/Card';
import ScreenTitle from '../components/ScreenTitle';
import { maxValue, minValue } from '../constants/Constants';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function NeurologistaHome() {
  const [pacientes, setPacientes] = useState([]);
  const [intevencao, setIntervencao] = useState<Boolean>(false);

  useEffect( () => {
    const interval = setInterval(() => {
      api.get('/pacientes').then((response) =>
      {console.log(response.data);
        setPacientes(response.data)
      });
    }, 10000)
    return () => clearInterval(interval)
  });

  if (pacientes == undefined) {
    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator animating={true} color={'black'} size={64}/>
    </View>
      );
  }else {
    return(
      <ScreenContainer>
        <ScreenTitle 
          title="Pacientes "/>
        <Separator vertical size={24}/>
        {pacientes.map((
          paciente: { oxigenacao: number, batimento_cardiaco: number, nome: string, ultrassom: string },
          index: string | number | null | undefined) => {
          return(
            <React.Fragment key={index}>
              <CardPaciente
                index={index}
                cor={(paciente.oxigenacao <= minValue || paciente.batimento_cardiaco <=minValue
                  || paciente.oxigenacao >= maxValue || paciente.batimento_cardiaco >= maxValue) ? 
                  '#ff726f' : '#d7f2f3'}
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
  }
};


