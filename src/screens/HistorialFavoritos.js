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
import ajustes from '../assets/ajustes.png'

const HistorialFavoritos = ({navigation}) => {
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

            <View style = {styles.usuarioDatos}>
              <View style = {{flex: 2,}}>
                <Text style = {styles.NombreUsuario}>Hombre Araña</Text>
                <Text style = {{fontSize: 16,}}>2022-3456</Text>
              </View>
              <Image source={ajustes} style = {styles.ImgAjustes}></Image>
            </View>


            <View style = {styles.Body}>
              <View style ={styles.SecciónHistorialFavorito}>
              <TouchableOpacity 
                    onPress={() => alert("Hello!!")}
                    style = {styles.BotonFavoritosHistorial}>
                  <Text style = {styles.SubTitulo}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => alert("Hello!!")}
                    style = {styles.BotonFavoritosHistorial}>
                  <Text style = {styles.SubTitulo}>Historial</Text>
                </TouchableOpacity>
              </View>

                <View style = {styles.Libros}>
                <TouchableOpacity 
                    onPress={() => navigation.push('Libro')}
                    style = {styles.BotonLibros}>
                    <Image source = {libro1} style ={styles.ImgAlquilar}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.push('Libro')}
                    style = {styles.BotonLibros}>
                    <Image source = {libro2} style ={styles.ImgAlquilar}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.push('Libro')}
                    style = {styles.BotonLibros}>
                    <Image source = {libro3} style ={styles.ImgAlquilar}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.push('Libro')}
                    style = {styles.BotonLibros}>
                    <Image source = {libro4} style ={styles.ImgAlquilar}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.push('Libro')}
                    style = {styles.BotonLibros}>
                    <Image source = {libro5} style ={styles.ImgAlquilar}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.push('Libro')}
                    style = {styles.BotonLibros}>
                    <Image source = {libro6} style ={styles.ImgAlquilar}></Image>
                </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HistorialFavoritos

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
  SecciónHistorialFavorito: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  BotonFavoritosHistorial: {
    marginBottom: 20,
    marginTop: 40,
  },
  Titulo: {
      fontSize: 30,
      fontWeight: "bold",
  },
  SubTitulo: {
      fontSize: 25,
      fontWeight: "bold",
      borderBottomWidth: 2,
  },   
  NombreUsuario: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ImgAjustes: {
    marginTop: 11,
    marginRight: 15,
  },
  TextoUsuario: {
      fontSize: 13,
      fontWeight: "bold",
  },
  BotonDatosUsuario: {
      flex: 1,
      alignItems: "center",
  },
  usuarioDatos: {
    flexDirection: "row",
    
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