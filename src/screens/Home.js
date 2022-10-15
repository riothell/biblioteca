import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import camera from '../assets/Perfil.jpg'
import libro1 from '../assets/Libros/Libro1.png'
import libro2 from '../assets/Libros/Libro2.png'
import libro3 from '../assets/Libros/Libro3.png'
import libro4 from '../assets/Libros/Libro4mas.png'
import libro5 from '../assets/Libros/Libro5.png'
import libro6 from '../assets/Libros/Libro6.png'
const Home = () => {
  return (
    <SafeAreaView style = {styles.main}>
        <ScrollView>
            <View style = {styles.Header}>
                <View style = {{flex:1,}}>
                    <TouchableOpacity 
                        onPress={() => alert("Hello!!")}
                        style = {styles.BotonImagen}>
                        <Image source = {camera} style ={styles.Imagen}></Image>
                    </TouchableOpacity>
                </View>
                <View style = {{flex:2,}}>
                    <Text style = {styles.SubTitulo}>Hola Hombre Araña!</Text>
                    <View style = {styles.DatosUsuario}>
                        <TouchableOpacity 
                            onPress={() => alert("Hello!!")}
                            style = {styles.BotonDatosUsuario}>
                            <Text style = {styles.TextoUsuario}>02</Text>
                            <Text style = {styles.TextoUsuario}>Leyendo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => alert("Hello!!")}
                            style = {[styles.BotonDatosUsuario, {borderLeftWidth: 2, borderRightWidth: 2,}]}>
                            <Text style = {styles.TextoUsuario}>30</Text>
                            <Text style = {styles.TextoUsuario}>Favoritos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => alert("Hello!!")}
                            style = {styles.BotonDatosUsuario}>
                            <Text style = {styles.TextoUsuario}>60</Text>
                            <Text style = {styles.TextoUsuario}>Historial</Text>
                        </TouchableOpacity>
                    </View>                
                </View>
            </View>

            <TextInput placeholder="Buscar" style = {styles.Buscador}></TextInput>

            <View style = {styles.Body}>
                <Text style = {styles.Titulo}>Solo para tí!</Text>

                <View style = {styles.Libros}>
                <TouchableOpacity 
                    onPress={() => alert("Hello!!")}
                    style = {styles.BotonLibros}>
                    <Image source = {libro1} style ={styles.ImgAlquilar}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => alert("Hello!!")}
                    style = {styles.BotonLibros}>
                    <Image source = {libro2} style ={styles.ImgAlquilar}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => alert("Hello!!")}
                    style = {styles.BotonLibros}>
                    <Image source = {libro3} style ={styles.ImgAlquilar}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => alert("Hello!!")}
                    style = {styles.BotonLibros}>
                    <Image source = {libro4} style ={styles.ImgAlquilar}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => alert("Hello!!")}
                    style = {styles.BotonLibros}>
                    <Image source = {libro5} style ={styles.ImgAlquilar}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => alert("Hello!!")}
                    style = {styles.BotonLibros}>
                    <Image source = {libro6} style ={styles.ImgAlquilar}></Image>
                </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    main: {
        margin: 10,
        paddingVertical: 15,
    },
    Header: {
        flexDirection: "row",
    },
    BotonImagen: {
        height:110,
        width:110,
        alignItems: "center",
        borderColor: '#169D83',
        borderRadius: 100,
    },
    Imagen: {
        height: 110,
        width: 110,
        borderRadius: 100,
        borderColor: "#169D83",
        borderWidth: 3,
        alignSelf: "center",
    },
    DatosUsuario: {
        flexDirection: "row",
        marginTop: 10,
    },
    Titulo: {
        fontSize: 30,
        fontWeight: "bold",
    },
    SubTitulo: {
        fontSize: 20,
        fontWeight: "bold",
    },    TextoUsuario: {
        fontSize: 13,
        fontWeight: "bold",
    },
    BotonDatosUsuario: {
        flex: 1,
        alignItems: "center",
    },
    Buscador: {
        marginVertical: 40,
        textAlign: "center",
        borderColor: '#169D83',
        borderWidth: 1,
        borderRadius: 100,
        width: "80%",
        height: 40,
        alignSelf: 'center',
    },
    Libros: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: 20,
    },
    BotonLibros: {
        marginBottom: 50,
    },
})