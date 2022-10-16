import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Animated, } from 'react-native'
import React, { useEffect, useState } from "react";

import { SafeAreaView } from 'react-native-safe-area-context'
import info from "../assets/info.png"

const ExpandableView = ({ expanded = false }) => {
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(height, {
      toValue: !expanded ? 200 : 0,
      duration: 150,
      useNativeDriver: false
    }).start();
  }, [expanded, height]);

  return (
    <Animated.View style={{ height, backgroundColor: "orange", width: "85%", alignSelf: "center",  paddingHorizontal: 20, borderRadius:10, backgroundColor:"#FFFFFF"}}>
        <ScrollView>
          <View style = {{flexDirection: "row", }}>
              <Text style = {{flex: 1}}>El supervivivente</Text>
              <Text style = {{flex: 1, textAlign: "right"}}>cod 12345</Text>
          </View>
          <Text>Labore veniam ut fugiat proident quis esse commodo esse exercitation et. Commodo irure proident et culpa est enim mollit aute cillum consectetur minim. Ut commodo eu est magna magna aliqua quis sit labore adipisicing laboris. Veniam mollit quis sint aliquip qui deserunt consectetur commodo mollit. Officia ipsum fugiat incididunt dolor.</Text>
          <Text>Fugiat aliqua nulla dolore irure excepteur. Est qui est voluptate dolore excepteur ex sunt laboris sint cupidatat. Reprehenderit veniam qui elit adipisicing minim exercitation. Dolore sunt nostrud ex deserunt qui deserunt. Ut id ad elit mollit exercitation sunt laborum nulla laborum occaecat. Veniam nisi ad nisi velit. Minim incididunt non qui ut fugiat veniam cupidatat irure sit voluptate anim in sint aliquip.</Text>
          <Text>Eu labore duis qui magna laboris in aliqua. Eu commodo ad mollit fugiat culpa nostrud sit irure elit officia in cillum laborum. Incididunt elit fugiat et sunt duis sunt mollit do officia ad enim nulla. Dolor veniam amet commodo elit consectetur sunt laboris veniam cillum officia nisi. Velit dolor labore laborum nisi. Occaecat pariatur aliquip tempor adipisicing voluptate voluptate ullamco esse id dolore do nostrud dolore.</Text>
        </ScrollView>

    </Animated.View>
  );
};

const SeleccionScreen = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);

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
              onPress={() => {setIsExpanded(!isExpanded);}}
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

            <ExpandableView expanded={isExpanded}/>
            <TouchableOpacity 
              onPress={() => {setIsExpanded1(!isExpanded1);}}
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

            <ExpandableView expanded={isExpanded1} />
            <TouchableOpacity 
              onPress={() => {setIsExpanded2(!isExpanded2);}}
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

            <ExpandableView expanded={isExpanded2} />
            <TouchableOpacity 
              onPress={() => {setIsExpanded3(!isExpanded3);}}
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

            <ExpandableView expanded={isExpanded3} />
            <TouchableOpacity 
              onPress={() => {setIsExpanded4(!isExpanded4);}}
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

            <ExpandableView expanded={isExpanded4} />
            <TouchableOpacity 
              onPress={() => {setIsExpanded5(!isExpanded5);}}
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

            <ExpandableView expanded={isExpanded5} />
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