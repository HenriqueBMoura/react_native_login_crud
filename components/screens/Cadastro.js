import React, {
    useState
} from 'react'

import {
    SafeAreaView,
    Text
} from 'react-native'

import {
    Button,
    Input
} from 'react-native-elements'

import { insertObject } from '../../DB'


const Cadastro = ( props ) => {

    const [ usuario, setUsuario] = useState('')
    const [ email, setEmail] = useState('')
    const [ senha, setSenha] = useState('')
    const [ confirmarSenha, setConfirmarSenha] = useState('')

    const validar = () => {
        if (usuario.trim().length === 0) {
            alert('Informe seu usuário')
            return false
        }

        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
        if ( ! regex.test(email) ) {
            alert('Informe um e-mail válido!')
            return false
        }

        if ( senha.length === 0) {
            alert('Informe uma senha!')
            return false
        }

        if ( senha !== confirmarSenha ) {
            alert('Confirmação de senha errada!')
            return false
        }

        return true
    }

    const salvar = () => {
        if ( validar() ) {
            insertObject(usuario, { email, senha }, (err) => {
                if (err) {
                    return alert('Não foi possível salvar!')
                }
                
                alert('Cadastro realizado com sucesso!')
            })
            props.navigation.navigate('login')

        }
    }
 

    return (
        <SafeAreaView style={{ padding : 16 }}>
            <Text>Informe seu usuário:</Text>
            <Input
                rightIcon={{
                    color : '#27488F',
                    name : 'user',
                    solid : true,
                    type : 'font-awesome-5'
                }}
                onChangeText={ (txt) => setUsuario(txt)}
                value={ usuario } />

            <Text>Informe seu e-mail:</Text>
            <Input
                rightIcon={{
                    color : '#27488F',
                    name : 'envelope',
                    solid : true,
                    type : 'font-awesome-5'
                }}
                onChangeText={ (txt) => setEmail(txt)}
                value={ email } />

            <Text>Informe uma senha:</Text>
            <Input
                rightIcon={{
                    color : '#27488F',
                    name : 'lock',
                    solid : true,
                    type : 'font-awesome-5'
                }}
                onChangeText={(txt) => setSenha(txt)}
                secureTextEntry
                value={ senha } />

            <Text>Confirme a senha informada:</Text>
            <Input
                rightIcon={{
                    color : '#27488F',
                    name : 'lock',
                    solid : true,
                    type : 'font-awesome-5'
                }}
                onChangeText={(txt) => setConfirmarSenha(txt)}
                secureTextEntry
                value={ confirmarSenha } />

            <Button 
                buttonStyle={{
                    backgroundColor : '#D58B13'
                }}
                onPress={ () => salvar() }
                title='Salvar' />
        </SafeAreaView>
    )
}

export default Cadastro