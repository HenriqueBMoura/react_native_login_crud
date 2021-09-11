import AsyncStorage from '@react-native-async-storage/async-storage'

const insertObject = async (key, value, callback) => {
    try {
        const obj = JSON.stringify(value)
        await AsyncStorage.setItem(key, obj, callback)
    }catch (error) {
        throw new Error('Não foi possível salvar no banco de dados!')
    }
}

const read = async (key, callback = null) => {
    try {
        await AsyncStorage.getItem(key, callback)
    } catch (error) {
        throw new Error('Não foi possível buscar no banco de dados!')
    }
}

const clear = async (callback = null) => {
    try {
        await AsyncStorage.clear(callback)
    } catch (error) {
        throw new Error('Não foi possível limpar o banco de dados!')
    }
}

export { clear, insertObject, read}