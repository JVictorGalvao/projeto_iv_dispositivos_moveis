import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScreenContainer } from '../components/ScreenContainer';
import { Separator } from '../components/Separator';
import ScreenTitle from '../components/ScreenTitle';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import style from '../assets/styles';
import { Button, TextInput } from 'react-native-paper';
import SimpleTextInput from '../components/TextInput';
import { maxValue, minValue } from '../constants/Constants';


export default function IntervencaoScreen() {
    const route: any = useRoute()


    return( 
        <ScreenContainer>
            <ScreenTitle title='Intervenção'/>
            <Separator vertical size={24}/>
                <View style={style.line}>
                    <Text style={style.text}>{'Paciente: '}</Text>
                    <Text style={style.result}> {`${route.params?.nome}`} </Text>
                </View>           
                <Separator vertical size={12}/>
                <View style={style.line}>
                    <Text style={style.text}>{'Batimentos por minuto: '}</Text>
                    <Text style={(route.params?.batimento_cardiaco >= maxValue || 
                        route.params?.batimento_cardiaco <= minValue) ?
                        style.resultbad : style.resultgood}> {`${route.params?.batimento_cardiaco}`} </Text>
                </View>
                <Separator vertical size={12}/>
                <View style={style.line}>
                    <Text style={style.text}>{'Oxigenação: '}</Text>
                    <Text style={(route.params?.oxigenacao >= maxValue ||
                        route.params?.oxigenacao <= minValue) ?
                        style.resultbad : style.resultgood}>{`${route.params?.oxigenacao}`}</Text>
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
                <SimpleTextInput/>
        </ScreenContainer>
    );        
};
