import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import camera from '../assets/AddCamera.png'
import mail from '../assets/RegisterScreen/mail.png'
import phone from '../assets/RegisterScreen/phone.png'
import Shape from '../assets/RegisterScreen/Shape.png'
import User from '../assets/RegisterScreen/User.png'
const RegisterScreen = ({navigation}) => {
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
            <View style = {{ flexDirection: "row", flexWrap: "wrap",}}>
                <Image source = {User} style = {styles.ImgInputs}></Image>
                <TextInput style = {styles.Label}
                placeholder="Ingresa tú Nombre"></TextInput>
            </View>

            <View style = {{ flexDirection: "row", flexWrap: "wrap",}}>
                <Image source = {mail} style = {styles.ImgInputs}></Image>
                <TextInput style = {styles.Label}
                placeholder="Ingresa tú Correo Electrónico"></TextInput>
            </View>

            <View style = {{ flexDirection: "row", flexWrap: "wrap",}}>
                <Image source = {phone} style = {styles.ImgInputs}></Image>
                <TextInput style = {styles.Label}
                placeholder="Ingresa tú Número de Teléfono"></TextInput>
            
         
            </View>
            <View style = {{ flexDirection: "row", flexWrap: "wrap",}}>
                <Image source = {Shape} style = {styles.ImgInputs}></Image>
                <TextInput style = {styles.Label}
                placeholder="Ingresa tú Contraseña"></TextInput>
   
 
            </View>
            <View style = {{ flexDirection: "row", flexWrap: "wrap",}}>
                <Image source = {Shape} style = {styles.ImgInputs}></Image>
                <TextInput style = {styles.Label}
                placeholder="Ingresa Nuevamente tú Contraseña"></TextInput>
            </View>

        </View>
        <TouchableOpacity
        onPress={() => navigation.navigate("TabNav")}
        style ={styles.BotonCrear}>
            <Text style ={styles.TextBoton}>Crear Cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.goBack()}>
            <Text style ={styles.BotonIngreso}>Ya tienes una cuenta? Iniciar Sesión</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    SafeArea:{
        alignItems: 'center',
        margin: 20,
    },
    Titulo: {
        marginTop: 70,
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
    ImgInputs: {
        marginTop: 12,
    },
    Label: {
        Color: '#817C7C',
        marginVertical: 10,
        borderBottomWidth: 1,
        marginLeft: 20,
        width: "80%",
    },
    BotonCrear: {
        backgroundColor: "#169D83",
        padding: 7,
        marginTop: 30,
        width: "90%",
        height: 49,
    },
    TextBoton: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FCFBF2',
    },
    BotonIngreso: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000',
    },
})