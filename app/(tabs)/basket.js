import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { ThemedText } from "../../components/ThemedText";
import { urlApi } from "../../components/urlApi";
import { FontAwesome } from "@expo/vector-icons";

export default function Basket() {
  const [listBasket, setBasket] = useState([]);

  const urlBasket = `https://${urlApi()}/delivery/api/v1/canasta/`;

  useEffect(() => {
    fetch(urlBasket)
      .then((response) => response.json())
      .then((listBasketapi) => setBasket(listBasketapi))
      .catch((error) => console.error('Error fetching basket data:', error));
  }, [urlBasket]);

  return (
    <View style={styles.conted}>
      <ThemedText type="title">Basket</ThemedText>
      <ScrollView>
        {listBasket.map((basket, index) => (
          <TouchableOpacity style={styles.buttonCard} key={index}>
            <View style={styles.cardBasket}>
              <FontAwesome name="shopping-basket" size={20} color="black" />
              <Text style={styles.cardBasketTitle}>{basket.nombre}</Text>
              <Text>{basket.descripcion.trim()}</Text>
              <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                {basket.precio} MXN
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conted: {
    flex: 1,
    marginTop: 90,
    alignItems: "center",
  },
  buttonCard: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  cardBasket: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#585757",
    width: 200,
    height: 200,
    margin: 5,
    borderRadius: 10,
  },
  cardBasketTitle: {
    fontWeight: "bold",
  },
});
