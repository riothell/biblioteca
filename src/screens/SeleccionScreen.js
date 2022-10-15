import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import info from "../assets/info.png"

const SeleccionScreen = () => {
  return (
    <SafeAreaView style = {styles.safeArea}>
      <ScrollView>
        <View style = {styles.Header}>
          <Text style = {styles.Titulo}>El superviviente</Text>
        </View>

        <View style = {styles.Body}>
          <View style = {{marginTop: 20,}}>
            <Text style = {styles.SubTitulo}>Selecciona el ejemplar</Text>
            <Text style = {styles.SubTitulo}>disponible</Text>
          </View>

        <View style = {styles.Botones}>
        <TouchableOpacity 
              onPress={() => alert("Hello!!")}
              style = {styles.Boton}>
                <View style = {{flex: 2, flexDirection: "row",}}>
                  <Text style = {styles.TextoPrincipal}>1. </Text>
                  <View>
                    <Text style = {styles.TextoPrincipal}>El superviviente</Text>
                    <Text style = {styles.TextoSecundario}>cod 123456</Text>
                  </View>
                </View>
              <Image source = {info} style = {styles.ImgInfo}></Image>
          </TouchableOpacity>
          <TouchableOpacity 
              onPress={() => alert("Hello!!")}
              style = {styles.Boton}>
                <View style = {{flex: 2, flexDirection: "row",}}>
                  <Text style = {styles.TextoPrincipal}>2. </Text>
                  <View>
                    <Text style = {styles.TextoPrincipal}>El superviviente</Text>
                    <Text style = {styles.TextoSecundario}>cod 123456</Text>
                  </View>
                </View>
              <Image source = {info} style = {styles.ImgInfo}></Image>
          </TouchableOpacity>
          <TouchableOpacity 
              onPress={() => alert("Hello!!")}
              style = {styles.Boton}>
                <View style = {{flex: 2, flexDirection: "row",}}>
                  <Text style = {styles.TextoPrincipal}>3. </Text>
                  <View>
                    <Text style = {styles.TextoPrincipal}>El superviviente</Text>
                    <Text style = {styles.TextoSecundario}>cod 123456</Text>
                  </View>
                </View>
              <Image source = {info} style = {styles.ImgInfo}></Image>
          </TouchableOpacity>
          <TouchableOpacity 
              onPress={() => alert("Hello!!")}
              style = {styles.Boton}>
                <View style = {{flex: 2, flexDirection: "row",}}>
                  <Text style = {styles.TextoPrincipal}>4. </Text>
                  <View>
                    <Text style = {styles.TextoPrincipal}>El superviviente</Text>
                    <Text style = {styles.TextoSecundario}>cod 123456</Text>
                  </View>
                </View>
              <Image source = {info} style = {styles.ImgInfo}></Image>
          </TouchableOpacity>
          <TouchableOpacity 
              onPress={() => alert("Hello!!")}
              style = {styles.Boton}>
                <View style = {{flex: 2, flexDirection: "row",}}>
                  <Text style = {styles.TextoPrincipal}>5. </Text>
                  <View>
                    <Text style = {styles.TextoPrincipal}>El superviviente</Text>
                    <Text style = {styles.TextoSecundario}>cod 123456</Text>
                  </View>
                </View>
              <Image source = {info} style = {styles.ImgInfo}></Image>
          </TouchableOpacity>
          <TouchableOpacity 
              onPress={() => alert("Hello!!")}
              style = {styles.Boton}>
                <View style = {{flex: 2, flexDirection: "row",}}>
                  <Text style = {styles.TextoPrincipal}>6. </Text>
                  <View>
                    <Text style = {styles.TextoPrincipal}>El superviviente</Text>
                    <Text style = {styles.TextoSecundario}>cod 123456</Text>
                  </View>
                </View>
              <Image source = {info} style = {styles.ImgInfo}></Image>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SeleccionScreen

const styles = StyleSheet.create({
  Header: {
    alignItems: "center",
    backgroundColor: "#1A419A",
    borderRadius: 30,
    height: 77,
    width: "100%",
    paddingTop: 5,
    marginTop: 40,
    },
  Titulo: {
    fontWeight: "bold",
    fontSize: 36,
    color: "#FFFFFF",
  },
  SubTitulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "#169D83",
  },
  Botones: {
    marginVertical: 20,
  },
  Boton: {
    backgroundColor: "#1A419A",
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 15,
    marginVertical: 13,
  },
  TextoPrincipal:{
    fontSize: 16,
    color: "#FFFFFF",
  },
  TextoSecundario:{
    fontSize: 13,
    color: "#FFFFFF",
  },
  ImgInfo: {
    alignSelf: "center",
  },
})