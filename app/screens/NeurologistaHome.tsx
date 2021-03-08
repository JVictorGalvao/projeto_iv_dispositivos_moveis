import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScreenContainer } from '../components/ScreenContainer';
import { Separator } from '../components/Separator';
import api from '../service/api';
import CardPaciente from '../components/Card';
import ScreenTitle from '../components/ScreenTitle';

export default function NeurologistaHome() {
  const [pacientes, setPacientes] = useState([]);

  useEffect( () => {
    api.get('/pacientes').then((response) =>
     {console.log(response.data);
      setPacientes(response.data)
    });
  },[])

  return(
    <ScreenContainer>
      <ScreenTitle 
        title="Pacientes "/>
      <Separator vertical size={24}/>
      {pacientes.map((paciente, index) => {
        return(
          <React.Fragment key={index}>
            <CardPaciente 
              nome={paciente.nome}
              batimento_cardiaco={paciente.batimento_cardiaco}
              oxigenacao={paciente.oxigenacao}
            />
            <Separator vertical size={24}/>
          </React.Fragment>
         
        )
      })}
    </ScreenContainer>
  )

};

