import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlechaDer from '../assets/FlechaDer.png'
import FlechaIzq from '../assets/FlechaIzq.png'
import libro1 from '../assets/Libros/Libro1.png'
import libro2 from '../assets/Libros/Libro2.png'
import libro3 from '../assets/Libros/Libro3.png'
import libro4 from '../assets/Libros/Libro4.png'
import libro4mas from '../assets/Libros/Libro4mas.png'
import libro5 from '../assets/Libros/Libro5.png'
import libro6 from '../assets/Libros/Libro6.png'
import Trofeo from '../assets/Trofeo.png'
import Bag from '../assets/bagMoney.png'

const Libro = ({navigation}) => {
  return (
    <SafeAreaView>
        <ScrollView>


            <TextInput placeholder="Buscar" style = {styles.Buscador}></TextInput>
            <View style = {styles.SeccionTitulo}>

            <View style = {styles.BotonesNavegacion}>

                <TouchableOpacity
                    onPress={() => alert("Flechas para Navegación")}
                    style = {styles.Flechas}>
                    <Image source = {FlechaIzq} style ={styles.ImagenFlechas}></Image>
                </TouchableOpacity>
                
                <Image source = {libro4} style ={styles.Imagen}></Image>

                <TouchableOpacity
                    onPress={() => alert("Flechas para Navegación")}
                    style = {styles.Flechas}>
                    <Image source = {FlechaDer} style ={styles.ImagenFlechas}></Image>
                </TouchableOpacity>

            </View>
                <Text style ={styles.Titulo}>El Superviviente</Text>
            </View>

            <View style = {styles.SeccionScroll}>
                <View style = {styles.SeccionLibro}>
                    <View style = {styles.InfoLibro}>
                        <View style = {styles.SpecsLibro}>
                            <Text style = {styles.TituloSpecs}>Lectores</Text>
                            <Text style = {styles.ValoresSpecs}>12</Text>
                        </View>

                        <View style = {styles.SpecsLibro}>
                            <Text style = {styles.TituloSpecs}>Valoración</Text>
                            <Text style = {styles.ValoresSpecs}>5</Text>
                        </View>

                        <View style = {styles.SpecsLibro}>
                            <Text style = {styles.TituloSpecs}>Capítulos</Text>
                            <Text style = {styles.ValoresSpecs}>30</Text>
                        </View>
                    </View>

                </View>

                <Text style ={styles.ResumenLibro}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus eu augue in nulla accumsan luctus. Vestibulum mattis, 
                        libero nec fringilla fringilla, purus purus ultricies massa, vel dapibus sem 
                        nibh eget justo. Etiam faucibus urna at magna eleifend laoreet. Morbi vel sapien 
                        in lorem tristique rhoncus non at diam. Suspendisse posuere eros tristique nisl 
                        ultricies, vitae tristique nibh mollis. Aliquam erat volutpat. Vivamus et porttitor 
                        velit. Sed odio turpis, pulvinar et arcu sed, accumsan tempus nisl.

                        Integer urna quam, ullamcorper eu tempor id, egestas tristique neque. Vestibulum convallis 
                        faucibus nunc aliquam vulputate. Suspendisse in iaculis lacus, non mattis nibh. Nulla id ligula 
                        elementum, rutrum libero non, tincidunt tortor. Curabitur felis justo, malesuada quis bibendum sed, 
                        fringilla non ipsum. Praesent at quam quam. Vestibulum rhoncus neque vel molestie dictum.

                        Donec vestibulum mattis maximus. Sed id porta justo. Suspendisse bibendum ligula eget diam 
                        tristique ullamcorper. Cras sem purus, tincidunt vitae lacinia ut, placerat mollis leo. Quisque 
                        tincidunt aliquet bibendum. Proin sit amet finibus lorem. Nulla dictum nisl sit amet tincidunt posuere. 
                        Mauris et molestie felis. Maecenas blandit auctor vehicula. Suspendisse vitae lectus dolor. Nulla justo lorem, 
                        ultrices eu dignissim vel, tincidunt at nisi.
                    </Text>

                <View style = {styles.InfoGeneros}>
                    <TouchableOpacity
                    onPress={() => alert("Géneros del libro que pueden llevar a una busqueda como categoría")}
                    style = {styles.Generos}>
                        <Text style = {styles.TextoGeneros}>Acción</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => alert("Géneros del libro que pueden llevar a una busqueda como categoría")}
                    style = {styles.Generos}>
                        <Text style = {styles.TextoGeneros}>Terror</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => alert("Géneros del libro que pueden llevar a una busqueda como categoría")}
                    style = {styles.Generos}>
                        <Text style = {styles.TextoGeneros}>Suspenso</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => alert("Géneros del libro que pueden llevar a una busqueda como categoría")}
                    style = {styles.Generos}>
                        <Text style = {styles.TextoGeneros}>Aventura</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                onPress={() => alert("Géneros del libro que pueden llevar a una busqueda como categoría")}
                style = {styles.BotonRankingGenero}>
                    <Image source = {Trofeo} style ={styles.ImgRankingGenero}></Image>
                    <Text style = {styles.SpecsRakingGenero}>#10</Text>
                    <Text style = {styles.SpecsRakingGenero}>Acción</Text>
                    <Image source = {FlechaDer} style ={styles.ImgRankingGenero}></Image>
                </TouchableOpacity>

                <View style = {styles.SeccionSeleccionLibro}>
                    <TouchableOpacity
                    onPress={() => alert("Indica la disponibilidad del libro")}
                    style = {[styles.BotonEjemplar, {flexDirection: "column"}]}>
                        <Text style = {[styles.TextoBotonEjemplar, {marginLeft: 10,}]}>Disponible</Text>
                        <Text style = {[styles.TextoBotonEjemplar, {marginLeft: 10,}]}>6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => navigation.push('SeleccionScreen')}
                    style = {[styles.BotonEjemplar, {flexDirection: "row"}]}>
                        <View>
                            <Text style = {[styles.TextoBotonEjemplar, {marginLeft: 10,}]}>Selecciona</Text>
                            <Text style = {[styles.TextoBotonEjemplar, {marginLeft: 10,}]}>Ejemplar</Text>
                        </View>
                        <Image source = {FlechaDer} style ={{marginTop: 6,}}></Image>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                onPress={() => alert("Alquilar ejemplar")}
                style = {styles.BotonAlquilar}>
                    <Image source = {Bag} style ={styles.ImgAlquilar}></Image>
                    <Text style = {styles.TextoBotonAlquilar}>Alquilar</Text>
                </TouchableOpacity>

                <View style ={styles.SeccionMasLibros}>
                    <Text style = {styles.TituloSeccionMasLibros}>Más Libros Similares</Text>
                </View>

                <ScrollView horizontal={true} style = {styles.ScrollMasLibros}>
                    <Image source = {libro1} style ={styles.ImgAlquilar}></Image>
                    <Image source = {libro2} style ={styles.ImgAlquilar}></Image>
                    <Image source = {libro3} style ={styles.ImgAlquilar}></Image>
                    <Image source = {libro4mas} style ={styles.ImgAlquilar}></Image>
                    <Image source = {libro5} style ={styles.ImgAlquilar}></Image>
                    <Image source = {libro6} style ={styles.ImgAlquilar}></Image>
                </ScrollView>

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Libro

const styles = StyleSheet.create({
    BotonesNavegacion: {
        flexDirection: "row",
    },
    ImagenFlechas:{
        flex: 1,
        marginTop: 5,
        height: 100,
        resizeMode: 'contain',
    },
    Flechas:{
        flex: 1,
        alignItems: "center",
        marginTop: 5,
    },
    Buscador: {
        marginVertical: 15,
        textAlign: "center",
        borderColor: '#169D83',
        borderWidth: 1,
        borderRadius: 100,
        width: "80%",
        height: 40,
        alignSelf: 'center',        
    },
    SeccionTitulo: {
        alignItems: "center",
    },
    Imagen: {
        marginVertical: 15,
    },
    Titulo: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    SeccionScroll: {
        backgroundColor: "#1A419A",
        width: "100%",
        borderRadius: 15,
        padding: 10,
    },
    SeccionLibro: {
        alignItems: "center",
    },
    InfoLibro: {
        flexDirection: "row",
    },
    SpecsLibro:{
        flex: 1,
        marginTop: 5,
        alignItems: "center",
    },
    TituloSpecs: {
        color: "#FCFBF2",
    },
    ValoresSpecs: {
        color: "#FCFBF2",
        fontWeight: "bold",
    },
    ResumenLibro: {
        color: "#FFFFFF",
        margin: 20,
        textAlign: "justify",
    },
    InfoGeneros: {
        flexDirection: "row",
    },
    Generos:{
        flex: 1,
        marginTop: 5,
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#169D83",
        margin: 5,
    },
    TextoGeneros: {
        color: "#FCFBF2",
    },
    BotonRankingGenero: {
        flexDirection: "row",
        backgroundColor: "#169D83",
        borderRadius: 20,
        width: "90%",
        alignSelf: "center",
        justifyContent: "space-around",
        marginVertical: 20,
        height: 30,
    },
    SpecsRakingGenero: {
        color: "#FCFBF2",
        marginTop: 2,
    },
    ImgRankingGenero: {
        height: 16, 
        width:15, 
        marginTop: 7,
    },
    SeccionSeleccionLibro:{
        flexDirection: "row",
        justifyContent: "space-around",
    },
    BotonEjemplar:{
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        width: 125,
        justifyContent: "space-evenly",
    },
    TextoBotonEjemplar: {
        color: "#000000",
        fontWeight: "bold",
    },
    BotonAlquilar: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        width: "90%",
        alignSelf: "center",
        justifyContent: "center",
        marginVertical: 20,
        height: 30,
    },
    ImgAlquilar: {
        marginHorizontal: 10,
        marginTop: 7,
    },
    TextoBotonAlquilar: {
        fontWeight: "bold",
        marginTop: 2,
    },
    TituloSeccionMasLibros: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 25,
    },
})
