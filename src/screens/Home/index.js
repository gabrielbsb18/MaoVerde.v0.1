import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const data = [
  {
    id: "1",
    title: "Combate Incêndio",
    description:
      "O CPCIF capacita operacionalmente os voluntarios e militares de outras instituições a desempenharem a função de combatente florestal, a fim de elevar a eficiência e a segurança das operações de prevenção e combate a incêndio florestal no bioma cerrado, bem como nos demais biomas do Brasil.O CPCIF é destinado à especialização de oficiais.",
    image: require("../../../assets/queimada.jpg"),
  },
  {
    id: "2",
    title: "Reflorestamento",
    description:
      "O CPCIF capacita operacionalmente os voluntarios e militares de outras instituições a desempenharem a função de combatente florestal, a fim de elevar a eficiência e a segurança das operações de prevenção e combate a incêndio florestal no bioma cerrado, bem como nos demais biomas do Brasil.O CPCIF é destinado à especialização de oficiais.",
    image: require("../../../assets/reflorestamento.jpg"),
  },
  {
    id: "3",
    title: "Educa Cerrado",
    description:
      "O CPCIF capacita operacionalmente os voluntarios e militares de outras instituições a desempenharem a função de combatente florestal, a fim de elevar a eficiência e a segurança das operações de prevenção e combate a incêndio florestal no bioma cerrado, bem como nos demais biomas do Brasil.O CPCIF é destinado à especialização de oficiais.",
    image: require("../../../assets/educa.jpg"),
  },
];

const data1 = [
  { id: "1", title: "Cerrado", image: require("../../../assets/cerrado.jpeg") },
  { id: "2", title: "Mangue ", image: require("../../../assets/mangue.jpeg") },
  {
    id: "3",
    title: "Caatinga",
    image: require("../../../assets/caatinga.jpeg"),
  },
  {
    id: "4",
    title: "Pantanal",
    image: require("../../../assets/pantanal.jpeg"),
  },
];

const Login = () => {
  const navigation = useNavigation();

  const handleNavRegister = () => {
    navigation.navigate("Perfil");
  };

  const detail = (item) => {
    navigation.navigate("Detail", { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => detail(item)}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={[styles.overlay, styles.overlayTextBottom]}>
        <Text style={styles.overlayText}>27</Text>
        <Text style={styles.overlayText}>Ago</Text>
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderdestaque = ({ item }) => (
    <TouchableOpacity style={styles.card2}>
      <Image source={item.image} style={styles.cardImage2} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.buttonPerfil}>
        <TouchableOpacity onPress={() => handleNavRegister()}>
          <Image
            style={styles.confirmed}
            source={require("../../../assets/Perfil.png")}
          />
        </TouchableOpacity>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.text}>Polly </Text>
          <Text style={styles.text1}>Dias </Text>
        </View>
        <Ionicons
          style={styles.notif}
          name="notifications-outline"
          size={30}
          color="white"
        />
      </View>
      <View style={{ margin: 10 }}>
        <Text style={styles.Title}>Próximas Atividades </Text>
      </View>
      <View style={styles.containerCard}>
        <FlatList
          style={styles.textCard}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
      <View>
        <FlatList
          data={data1}
          renderItem={renderdestaque}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>

      <View style={{ margin: 10 }}>
        <Text style={styles.Title1}>Últimas Ações </Text>
      </View>

      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8        )",
          width: 360,
          height: 160,
          borderRadius: 25,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/retangulo.png")}
          style={{
            height: 80,
            width: 344,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
            marginTop: 10,
          }}
        />
        <View style={{flexDirection: "row",marginTop:8}}>
          <View style={{flexDirection: "row"}}>
          <Image source={require('../../../assets/Pessoa1.png')}/>
          <Text>Rafaela</Text>
          </View>
          <Text style={{width:226, height:80, marginLeft:15}}>Instituto Brasília Ambiental, vai unir educação ambiental e ação social.Esse ano, o projeto terá como palco o Parque Ecológico.</Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 29,
    paddingLeft: 24,

    backgroundColor: "#132815",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 14,
    fontWeight: "800",
  },
  text1: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 14,
  },
  Title: {
    fontSize: 24,
    color: "white",
    marginTop: 40,
    fontWeight: "800",
  },
  Title1: {
    fontSize: 24,
    color: "white",
    marginTop: 10,
    fontWeight: "800",
  },
  buttonPerfil: {
    flexDirection: "row",
  },
  notif: {
    marginLeft: 200,
  },
  containerCard: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  card: {
    margin: 12,
    paddingTop: 1,
    width: 144,
    height: 255,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  cardImage: {
    width: 160,
    height: 250,
    borderRadius: 8,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 13,
  },
  cardImage2: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  card2: {
    paddingTop: 20,
    marginBottom: 20,
    width: 100,
    height: 120,

    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,

    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: 35,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  overlayText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  overlayTextBottom: {
    marginTop: 180,
  },
});

export default Login;
