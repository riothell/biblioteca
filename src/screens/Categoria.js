import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Aventura from '../assets/CategoriaScreen/Aventura.png'
import Comedia from '../assets/CategoriaScreen/Comedia.png'
import Drama from '../assets/CategoriaScreen/Drama.png'
import Educacion from '../assets/CategoriaScreen/Educacion.png'
import Ficcion from '../assets/CategoriaScreen/Ficcion.png'
import Infantil from '../assets/CategoriaScreen/Infantil.png'
import Poesia from '../assets/CategoriaScreen/Poesia.png'
import Terror from '../assets/CategoriaScreen/Terror.png'

const Categoría = () => {
  return (
    <SafeAreaView style = {styles.SafeArea}>
      <TextInput placeholder="Buscar" style = {styles.Buscador}></TextInput>

      <Text style = {styles.Titulo}>Categoría</Text>
      <ScrollView>

        <View style = {styles.columnas}>

          <TouchableOpacity
          onPress={() => alert("Hello!!")}
          style = {styles.BotonImagen}>

            <View style = {styles.Viewboton}>
              <Image source = {Drama} style ={styles.Imagen}></Image>
              <Text style = {styles.TextoBotones}>Drama</Text>
            </View>

          </TouchableOpacity>


          <TouchableOpacity
          onPress={() => alert("Hello!!")}
          style = {styles.BotonImagen}>

            <View style = {styles.Viewboton}>
              <Image source = {Ficcion} style ={styles.Imagen}></Image>
              <Text style = {styles.TextoBotones}>Ficción</Text>
            </View>

          </TouchableOpacity>

        </View>

        <View style = {styles.columnas}>

          <TouchableOpacity
          onPress={() => alert("Hello!!")}
          style = {styles.BotonImagen}>

            <View style = {styles.Viewboton}>
              <Image source = {Educacion} style ={styles.Imagen}></Image>
              <Text style = {styles.TextoBotones}>Educación</Text>
            </View>

          </TouchableOpacity>


          <TouchableOpacity
          onPress={() => alert("Hello!!")}
          style = {styles.BotonImagen}>

            <View style = {styles.Viewboton}>
              <Image source = {Poesia} style ={styles.Imagen}></Image>
              <Text style = {styles.TextoBotones}>Poesía</Text>
            </View>

          </TouchableOpacity>

        </View>

        <View style = {styles.columnas}>

          <TouchableOpacity
          onPress={() => alert("Hello!!")}
          style = {styles.BotonImagen}>

            <View style = {styles.Viewboton}>
              <Image source = {Terror} style ={styles.Imagen}></Image>
              <Text style = {styles.TextoBotones}>Terror</Text>
            </View>

          </TouchableOpacity>


          <TouchableOpacity
          onPress={() => alert("Hello!!")}
          style = {styles.BotonImagen}>

            <View style = {styles.Viewboton}>
              <Image source = {Comedia} style ={styles.Imagen}></Image>
              <Text style = {styles.TextoBotones}>Comedia</Text>
            </View>

          </TouchableOpacity>

        </View>

        <View style = {styles.columnas}>

          <TouchableOpacity
          onPress={() => alert("Hello!!")}
          style = {styles.BotonImagen}>

            <View style = {styles.Viewboton}>
              <Image source = {Aventura} style ={styles.Imagen}></Image>
              <Text style = {styles.TextoBotones}>Aventura</Text>
            </View>

          </TouchableOpacity>


          <TouchableOpacity
          onPress={() => alert("Hello!!")}
          style = {styles.BotonImagen}>

            <View style = {styles.Viewboton}>
              <Image source = {Infantil} style ={styles.Imagen}></Image>
              <Text style = {styles.TextoBotones}>Infantil</Text>
            </View>

          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Categoría

const styles = StyleSheet.create({
  SafeArea:{

  },
  Buscador: {
    marginVertical: 10,
    textAlign: "center",
    borderColor: '#169D83',
    borderWidth: 1,
    borderRadius: 100,
    width: "80%",
    height: 40,
    alignSelf: 'center',
  },
  Titulo: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  BotonImagen: {
    height: 125,
    width: 125,
    backgroundColor: "#1A419A",
    alignItems: "center",
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 33,
    flex: 1,
    marginHorizontal:10,
  },
  TextoBotones: {
    color: "#FFFFFF",
    fontWeight: 'bold',
  },
  Viewboton: {
    marginTop: 20,
  },
  Imagen: {
    alignSelf: "center",
  },
  filas: {
    flexDirection: "row",
    width: 300,
    height: 150,
  },
  columnas: {
    flexDirection: "row",
    paddingVertical: 15,
    width: "80%",
    alignSelf: "center",
  },
})