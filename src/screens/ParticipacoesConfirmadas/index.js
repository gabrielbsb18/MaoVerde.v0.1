import React, {useContext} from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {AuthContext} from '../../contexts/auth'

const ParticipacoesConfirmadas = () => {
  const { user, username } = useContext(AuthContext);
  const navigation = useNavigation();

  const hanDetalhes = () => {
    navigation.navigate("DetalhesConfirmados");
  };

  const hanFeedback = () => {
    navigation.navigate("Feedback");
  };

  const hanHome = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginHorizontal: 25 }}>
          <View style={styles.box1}>
            <TouchableOpacity style={styles.box1_2}>
              <Image source={require("../../../assets/Perfil.png")} />
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.text}>{username.username}</Text>
                <Text style={styles.text1}>{user.email}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => hanHome()}>
              <Ionicons name="home-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>

          {/* <View style={styles.box2}>
                    <Text style={{fontSize: 20, color: 'white', marginLeft:15}}>Confirmações</Text>
                </View>

                <TouchableOpacity style={styles.box3} onPress={() => hanDetalhes()}>
                    <Image style={styles.box3_1} source={require('../../../assets/Box3_Background.png')}/>
                    <Text style={{color: 'white', fontSize: 20, position: 'absolute', top: 110, left: -20}}>Prevênção de Incêndio</Text>
                    <Text style={{color: 'white', fontSize: 10, position: 'absolute', top: 138, left: -20}}>27, Ago, 12h </Text>
                </TouchableOpacity>

                <View style={styles.box2}>
                    <Text style={{fontSize: 20, color: 'white', marginLeft:15}}>Feedback</Text>
                </View>

                <TouchableOpacity style={styles.box3} onPress={() => hanFeedback()}>
                    <Image style={styles.box3_1} source={require('../../../assets/Box3_Background.png')}/>
                    <Text style={{color: 'white', fontSize: 20, position: 'absolute', top: 110, left: -20}}>Prevênção de Incêndio</Text>
                    <Text style={{color: 'white', fontSize: 10, position: 'absolute', top: 138, left: -20}}>27, Ago, 12h </Text>
                </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:35,
    flex: 1,
    backgroundColor: "#132815",
  },
  box1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box1_2: {
    flexDirection: "row",
    alignItems: "center",
  },
  box1_2_1: {
    marginLeft: 10,
  },
  box2: {
    marginTop: 20,
    marginBottom: 10,
  },
  box3: {
    alignItems: "center",
    borderRadius: 40,
    marginHorizontal: 40,
  },
  box3_1: {
    borderRadius: 25,
    resizeMode: "contain",
    width: 330,
    height: 180,
  },
  box3_1_1: {
    position: "absolute",
    top: 500,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 14,
    fontWeight: "800",
  },
  text1: {
    color: "#fff",
    fontSize: 17,
    marginLeft: 14,
  },
});

export default ParticipacoesConfirmadas;
