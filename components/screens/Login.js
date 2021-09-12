
import React,{
    useState
} from 'react'

import {
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native'

import {
    Button,
    Input
} from 'react-native-elements'

import { read } from '../../DB'


const Login = ( props ) => {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const validar = () => {
        if ( usuario.trim().length === 0 ) {
            alert('Informe o usuário!')
            return false
        }

        return true
    }

    const entrar = () => {
        if ( validar() ) {
            read(usuario, (err, dado) => {
                if (err) {
                    return alert('Ocorreu um erro ao buscar o registro!')
                }

                if ( ! dado ) {
                    return alert('Usuário não encontrado!')
                }

                dado = JSON.parse(dado)

                if (dado.senha === senha) {
                    props.navigation.reset({
                        index : 0,
                        routes : [
                            {
                                name: 'home',
                                params : { 
                                    usuario : usuario,
                                    email : dado.email
                                }
                            }
                        ]
                    })
                } else {
                    alert('Usuario/senha inválidos!')
                }
            })
        }
        
    }

    return (
        <SafeAreaView style={{ padding : 16 }}>

            <Image
                source={require('../../assets/logo.png')}
                style={{ width: '100%', 
                        height: 80,
                        marginTop : 70,
                        marginBottom : 60 }} />
            
            <Text>Informe seu usuário</Text>
            <Input
                rightIcon={{
                    color : '#27488F',
                    name : 'user',
                    solid : true,
                    type : 'font-awesome-5'
                }}
                onChangeText={ (txt) => setUsuario(txt)}
                value={ usuario } />

            <Text>Informe sua senha:</Text>
            <Input
                rightIcon={{
                    color : '#27488F',
                    name : 'lock',
                    solid : true,
                    type : 'font-awesome-5'
                }}
                onChangeText={ (txt) => setSenha(txt)}
                secureTextEntry
                value={ senha } />

            <Button
                buttonStyle={{
                    backgroundColor : '#D58B13'
                }}
                onPress={ () => entrar() }
                title='ENTRAR' />

            <TouchableOpacity
                onPress={ () => props.navigation.navigate('cadastro') }
                style={{ marginTop : 16 }}>
                <Text style={{ textAlign : 'center',
                                color : '#0540F2' }}>
                    Ainda não tem conta? Cadastre-se agora!
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

}

export default Login
