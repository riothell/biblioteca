import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import bordelogo from "../assets/bordelogo.png"
import Logo from "../assets/Logo.png"
/*
import COLORPRIMARIO from '../utils/paleta'
import COLORPRIMARIO from '../utils/paleta'
*/
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 1000);


export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <Image source={bordelogo} style = {{marginTop : 145, height:65, width: "100%", }}></Image>

          <View style = {styles.Header}>
            <Text style = {styles.Titulo}>Inicia Sesión</Text>
          </View>

          <View style={styles.Inputs}>
            <TextInput style = {styles.Label} 
              placeholder="Ingresa tu correo electrónico"></TextInput>
            <TextInput secureTextEntry = {true} style = {styles.Label}
              placeholder="Ingresa tu Contraseña"></TextInput>
          </View>

          <TouchableOpacity
            onPress={() => alert('Hello, world!')}
            style={styles.Buton}>
            <Text style = {styles.TextoBoton}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('Hello, world!')}>
              <View style = {styles.BotonCrear}>
                <Text style = {{}}>No tienes una cuenta?</Text>
                <Text style = {{fontWeight:"bold",}}> Crea una Cuenta</Text>
              </View>
          </TouchableOpacity>

          <Image source={Logo} style={styles.ImagenLogo}></Image>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A419A',
  },
  Header: {
    marginTop: 70,
    alignItems: "center",
  },
  Titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#FFFFFF",
  },
  Label: {
    color: "#FFFFFF",
    justifyContent: "flex-start",
    marginVertical: 5,
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 10,
  },
  Inputs: {
    alignSelf: 'center',
    width: '85%',
    marginTop: 30,
  },
  Buton: {
    height: 50,
    width: '90%',
    borderColor: '#FCFBF2',
    borderWidth: 1,
    backgroundColor: '#169D83',
    borderRadius: 5,
    alignSelf:"center",
    marginTop: 35,
    paddingTop: 7,
  },
  TextoBoton: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  SubTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    color: '#FCFBF2',
  },
  BotonCrear: {
    marginTop: 20,
    flexDirection: "row",
    alignSelf:"center",
  },
  ImagenLogo: {
    marginVertical: 15,
  },
});
