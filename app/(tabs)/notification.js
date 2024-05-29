import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { urlApi } from "../../components/urlApi";
import { useEffect, useState } from "react";
import { ThemedText } from "../../components/ThemedText";

export default function Notification() {
  const [listNotification, setNotification] = useState([]);

  const urlNotification = `https://${urlApi()}/delivery/api/v1/notification/`;

  useEffect(() => {
    fetch(urlNotification)
      .then((AllNotification) => AllNotification.json())
      .then((listNotifications) =>
        setNotification(...listNotification, listNotifications)
      );
  }, []);

  // console.log(listNotification);

  return (
    <View style={style.styleConted}>
      <ThemedText type="title">
        Notificaciones
      </ThemedText>

      <ScrollView>
        {listNotification.map((notification, index) => (
          <View key={index} style={style.styleCenterConted}>
            <Text>
              {notification.notication_date
                .slice(0, -1)
                .split("T")
                .join(" a las ")}
            </Text>
            {/* <View> */}
            <View style={style.styleNotification}>
              <Text style={style.styleTitle}>
                {notification.notification_title}
              </Text>
              <Text>{notification.notification_description}</Text>
              <View style={style.divider} />
              <TouchableOpacity>
                <Text>Ver detalles ᐳ</Text>
              </TouchableOpacity>
              {/* </View> */}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  styleConted: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop:100,
    height: "70%",
    width: "100%",

  },
  styleCenterConted: {
    alignItems: "center",
    margin: 5,
  },
  styleNotification: {
    borderWidth: 1,
    borderColor: "brack",
    padding: 5,
    width: 320,
    height: "auto",
    borderRadius: 5,
  },
  styleTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  divider: {
    borderBottomColor: "#EFEFEF", // Color de la línea
    borderBottomWidth: 1, // Ancho de la línea
    marginVertical: 10, // Margen vertical
  },
});
