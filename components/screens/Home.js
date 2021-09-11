import React from 'react'

import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import {
    Button,
    Input
} from 'react-native-elements'
import { clear } from '../../DB'
 
const Home = ( props ) => {

    const { usuario, email } = props.route.params

    const sair = () => {
        props.navigation.reset({
            index : 0,
            routes : [{ name : 'login'}]
        })
    }

    const limpar = () => {
        clear((err) => {
            if (err) {
                return alert('Não foi possível limpar o banco de dados!')
            }

            alert('Banco de dados zerado com sucesso!')
            sair()
        })
    }

    return (
        <SafeAreaView style={{ padding : 16 }}>
            <Text style={{
                textAlign : 'center',
                fontSize : 18,
                fontWeight : '500',
                marginBottom : 10
            }}>Olá {usuario} {email}</Text>

            { usuario === 'braintech' && (
                <Button
                    buttonStyle={{
                        backgroundColor : '#27488F'
                    }} 
                    onPress={ () => limpar() }
                    title='LIMPAR BANCO DE DADOS' />

            )}

            <View style={{ marginBottom : 8 }} />

            <Button 
                buttonStyle={{
                    backgroundColor : '#D58B13'
                }} 
                onPress={ () => sair() }
                title='SAIR' />
        </SafeAreaView>
    )

}

export default Home