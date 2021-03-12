import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ScreenContainer } from '../components/ScreenContainer';
import { Separator } from '../components/Separator';
import {ScreenTitleIntervencao} from '../components/ScreenTitle';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import style from '../assets/styles';
import SimpleTextInput from '../components/TextInput';
import { severoMax, severoMin } from '../constants/Constants';
import BackButton from '../components/BackButton';
import { Context } from '../service/Provider';


export default function IntervencaoScreen() {
    const route: any = useRoute()
    const { isNeurologista } = useContext(Context);
      
    return( 
        <ScreenContainer>
            <BackButton />
            <ScreenTitleIntervencao title={isNeurologista ? "Intervenção" : "Alterações"}/>
            <Separator vertical size={24}/>
                <View style={style.line}>
                    <Text style={style.text}>{'Paciente: '}</Text>
                    <Text style={style.result}> {`${route.params?.nome}`} </Text>
                </View>           
                <Separator vertical size={12}/>
                <View style={style.line}>
                    <Text style={style.text}>{'Batimentos por minuto: '}</Text>
                    <Text style={{color: ((route.params?.severidade_batimento_cardiaco == 1) ? '#ff726f' : 
                    ((route.params?.severidade_batimento_cardiaco == 2) ? "#ffce00" : "#a5d610")),
                    fontSize: 20, fontWeight: 'bold'}}> {`${route.params?.batimento_cardiaco}`} </Text>
                </View>
                <Separator vertical size={12}/>
                <View style={style.line}>
                    <Text style={style.text}>{'Oxigenação: '}</Text>
                    <Text style={{color: ((route.params?.severidade_oxigenacao == 1) ? '#ff726f' : 
                    ((route.params?.severidade_oxigenacao == 2) ? "#ffce00" : "#a5d610")),
                    fontSize: 20, fontWeight: 'bold'}}>{`${route.params?.oxigenacao}`}</Text>
                </View>
                <Separator vertical size={12}/>
                <View style={style.line}>
                    <Text style={style.text}>{'Ultrassom: '}</Text>
                    <Separator size={48}/>
                    <Image 
                        style={{width:150, height:150}}
                        source={{uri: `${route.params?.ultrassom}`}}/>
                </View>
                <Separator vertical size={42}/>
                {console.log(route.params?.index)}
                <SimpleTextInput paciente_id={1}/>
        </ScreenContainer>
    );        
};
