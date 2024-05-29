import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native";
// import dataclient from "./class/ClientDelivery";
import dataclient from "../../class/ClientDelivery";

export default function ShoppingCart() {
  const imageCart = require("../../assets/images/shoppingCart.png");

  // const { nameProduct, product } = route.params;
  // const totalPay = 0;
  const [totalPay, setTotalPay] = useState(0);
  // function onPress() {
  //   navigation.navigate("sendOrder", { product });
  // }

  // function onPressCancel() {
  //   dataclient.setTotalProductReiniciar();
  //   // navigation.navigate("restaurant");
  // }

  // setTotalPay(dataclient.getTotalPriceProduct())

  return (
    <View style={style.styleConted}>
      <Text style={style.styleText}>Carrito de compras</Text>
      <Image source={imageCart} style={style.styleImgCart}></Image>

      <View style={style.styleContedViewProduct}>
        <Text style={style.styleNameProduct}>Productos</Text>
        <View style={style.styleListProduc}>
        </View>

        {/* {setTotalPay(dataclient.getTotalPriceProduct())} */}

        <View style={style.styleTotalPay}>
          <Text>Total a pagar</Text>
          {/* <Text>${priceProduct} MXN</Text> */}
        </View>
      </View>

      <View style={{justifyContent:'space-between', flexDirection:'row'}}>
        <TouchableOpacity
          style={style.styleButtonCancel}
        >
          <Text style={style.textPay}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.styleButtonPay}
        >
          <Text style={style.textPay}>Pagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  styleConted: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  styleContedViewProduct: {
    width: "80%",
  },
  styleText: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
  },
  styleListProduc: {
    // flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  styleImgCart: {
    marginTop: 50,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  styleNameProduct: {
    fontSize: 20,
    marginTop: 25,
    marginBottom: 25,
  },
  styleTotalPay: {
    borderTopWidth: 1,
    marginTop: 20,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  styleButtonPay: {
    backgroundColor: "#0FFF6F",
    padding: 12,
    paddingLeft: 45,
    paddingRight: 45,
    borderRadius: 15,
    marginTop: "20%",
    color: "white",
  },
  textPay: {
    // color:'white'
  },
  styleButtonCancel: {
    // c: "white",
    // padding: 12,
    // paddingLeft: 45,
    // paddingRight: 45,
    // borderRadius: 15,
    // backgroundColor: "#FE2E2E",
    marginRight:5,
    // backgroundColor: "#FE2E2E",
    backgroundColor: "#FF5C54",
    padding: 12,
    paddingLeft: 45,
    paddingRight: 45,
    borderRadius: 15,
    marginTop: "20%",
    color: "white",
  },
  // borderTopColor:"d1d1d1"
});
