import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
/*
import COLORPRIMARIO from '../utils/paleta'
import COLORPRIMARIO from '../utils/paleta'
*/
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 1000);


export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.Titulo}>Inicia Sesión</Text>
      <Text>Sign your Account</Text>
      <View style={styles.Labels}>
        <TextInput style = {styles.Label} 
          placeholder="Ingresa tu correo electrónico"></TextInput>
        <TextInput style = {styles.Label}
          placeholder="Ingresa tu Contraseña"></TextInput>
        <StatusBar style="auto" />
      </View>
      <TouchableOpacity
      onPress={() => alert('Hello, world!')}
      style={styles.Buton}>
        <Text>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => alert('Hello, world!')}>
        <Text>No tienes una cuenta? Crea una Cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A419A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  Label: {
    height: 40,
    borderColor: '#FCFBF2',
    borderWidth: 1,
    marginVertical: 5,
    textAlign: 'center',
    borderRadius: 4,
    padding: 10,
  },
  Labels: {
    alignSelf: 'center',
    width: '90%',
  },
  Buton: {
    height: 50,
    width: '90%',
    borderColor: '#FCFBF2',
    borderWidth: 1,
    backgroundColor: '#169D83',
    borderRadius: 5,
    marginTop: 35,
  },
  SubTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    color: '#FCFBF2',
  },
});
