import  React, { useContext } from 'react';
import { ScreenContainer } from '../components/ScreenContainer';
import { Separator } from '../components/Separator';
import { Button } from 'react-native-paper';
import {ScreenTitle} from '../components/ScreenTitle';
import { Context } from '../service/Provider';


interface LoginProps {
   
}


export default function Login() {
    const {loginCuidador, loginNeurologista} = useContext(Context)
    return( 
        <ScreenContainer>
            <ScreenTitle
                title='Login'
            />
            <Separator vertical size={256}/>
            <Button mode='contained' color="#d7f2f3"
                onPress={()=> {loginNeurologista();}}>
                    Neurologista
            </Button>
            <Separator vertical size={32}/>
            <Button mode='contained' color="#d7f2f3"
                onPress={()=> {loginCuidador();}}>
                    Cuidador
            </Button>
        </ScreenContainer>
    )};
  
  