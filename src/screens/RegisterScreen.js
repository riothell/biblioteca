import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import camera from '../assets/AddCamera.png'
const RegisterScreen = () => {
  return (
    <SafeAreaView style = {styles.SafeArea}>
        <Text style ={styles.Titulo}>Registrate!</Text>
        <Text style ={styles.SubTitulo}>Crea tú nueva cuenta llenando el</Text>
        <Text style ={styles.SubTitulo}>formulario</Text>
        
        <TouchableOpacity 
        onPress={() => alert("Hello!!")}
        style = {styles.BotonImagen}>
            <Image source = {camera} style ={styles.Imagen}></Image>
        </TouchableOpacity>

        <View style = {styles.Inputs}>

            <TextInput style = {styles.Label}
            placeholder="Ingresa tú Nombre"></TextInput>
            <TextInput style = {styles.Label}
            placeholder="Ingresa tú Correo Electrónico"></TextInput>
            <TextInput style = {styles.Label}
            placeholder="Ingresa tú Número de Teléfono"></TextInput>
            <TextInput style = {styles.Label}
            placeholder="Ingresa tú Contraseña"></TextInput>
            <TextInput style = {styles.Label}
            placeholder="Ingresa Nuevamente tú Contraseña"></TextInput>

        </View>
        <TouchableOpacity
        onPress={() => alert("Hello!!")}
        style ={styles.BotonCrear}>
            <Text style ={styles.TextBoton}>Crear Cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => alert("Hello!!")}>
            <Text style ={styles.BotonIngreso}>Ya tienes una cuenta? Iniciar Sesión</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    SafeArea:{
        alignItems: 'center',
    },
    Titulo: {
        marginTop: 100,
        fontSize: 36,
        fontWeight: 'bold',
    },
    BotonImagen: {
        marginVertical: 15,
        height:110,
        width:110,
        alignItems: "center",
        borderColor: '#169D83',
        borderWidth: 1,
        borderRadius: 100,
    },
    Imagen: {
        marginTop: 35,
    },
    Inputs: {
        alignItems: "baseline",
    },
    Label: {
        Color: '#817C7C',
        marginVertical: 5,
    },
    BotonCrear: {
        backgroundColor: "#169D83",
        padding: 7,
        marginVertical: 10,
        width: "80%",
        height: 49,
    },
    TextBoton: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FCFBF2',
    },
    BotonIngreso: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000',
    },
})