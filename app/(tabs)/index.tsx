import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Link } from "expo-router";
// import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  // const URL_API = `https://${urlApi()}`;

  function elegirCanasta() {}

  return (
    <View style={styles.container}>
      <ThemedText type="title" style={{ marginBottom: 50 }}>
        BlackBull
      </ThemedText>

      <TextInput
        style={styles.TextInputAddress}
        placeholder="📍Agregar ubicación"
      />

      <TextInput
        style={[styles.TextInputAddress, styles.TextSearchProduts]}
        placeholder="🔍 Buscar productos"
      />

      <Text style={styles.text}></Text>

      <View style={styles.botonesOpcionesView}>
          <TouchableOpacity style={[styles.opcionBoton]}>
        <Link href="/basket" style={{backgroundColor:'#101010'}}>
            <FontAwesome5 name="shopping-basket" size={35} color="white" />
            <Text style={{ fontSize: 15, color: "white" }}>Comprar</Text>
        </Link>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    // width: "auto",

    // height: "100%",
  },
  text: {
    fontSize: 20,
    color: "black",
    marginTop: "20%",
    marginBottom: 10,
  },

  TextInputAddress: {
    width: 250,
    height: 35,
    textAlign: "center",
    borderColor: "white",
    borderRadius: 5,
    padding: 8,
    backgroundColor: "#D1D1D1",
  },
  TextSearchProduts: {
    marginTop: 40,
  },
  ImgUser: {
    width: 45,
    height: 45,
    borderRadius: 75,
    marginTop: 0,
    alignItems: "flex-start",
    marginRight: 250,
  },
  botonesOpcionesView: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "",
    // height:200
  },

  opcionBoton: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 100,
    margin: 10,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#202020",
  },
});
