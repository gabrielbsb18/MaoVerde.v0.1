import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Perfil2 = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={estilos.container}>
      <View>
        <TouchableOpacity onPress={handleGoBack}>
          <Image
            source={require("../../../assets/Voltar.png")}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>

        <View style={estilos.imagem01}>
          <Image source={require("../../../assets/Perfil.png")} />
          <Text style={{ marginTop: 13, fontSize: 26, color: "white" }}>
            Polly Dias
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 20 }}>
          <Text style={{ color: "white", fontSize: 25 }}>Outubro </Text>
          <Text style={{ color: "rgba(22, 93, 36, 1)", fontSize: 25 }}>23</Text>
        </View>

        <View style={{ width: 330, alignSelf: "center", marginTop: 5 }}>
          <View style={estilos02.calendario}>
            <Text style={estilos02.texto01}>S</Text>
            <Text style={estilos02.texto01}>T</Text>
            <Text style={estilos02.texto01}>Q</Text>
            <Text style={estilos02.texto01}>Q</Text>
            <Text style={estilos02.texto01}>S</Text>
            <Text style={estilos02.texto02}>S</Text>
            <Text style={estilos02.texto02}>D</Text>
          </View>
          <View
            style={{
              backgroundColor: "rgba(79, 82, 88, 1)",
              paddingVertical: 1,
              marginTop: 17,
            }}
          ></View>
          <View style={estilos02.calendario}>
            <Text style={estilos02.texto02}> </Text>
            <Text style={estilos02.texto02}> </Text>
            <Text style={estilos02.texto02}> </Text>
            <Text style={estilos02.texto02}> </Text>
            <Text style={estilos02.texto02}>1</Text>
            <Text style={estilos02.texto02}>2</Text>
            <Text style={estilos02.texto02}>3</Text>
          </View>
          <View style={estilos02.calendario}>
            <Text style={estilos02.texto02}>4</Text>
            <Text style={estilos02.texto02}>5</Text>
            <Text style={estilos02.texto02}>6</Text>
            <Text style={estilos02.texto02}>7</Text>
            <Text style={estilos02.texto02}>8</Text>
            <Text style={estilos02.texto02}>9</Text>
            <Text style={estilos02.texto02}>10</Text>
          </View>
          <View style={estilos02.calendario}>
            <Text style={estilos02.texto02}>11</Text>
            <Text style={estilos02.texto02}>12</Text>
            <Text style={estilos02.texto02}>13</Text>
            <Text style={estilos02.texto02}>14</Text>
            <Text style={estilos02.texto02}>15</Text>
            <Text style={estilos02.texto02}>16</Text>
            <Text style={estilos02.texto02}>17</Text>
          </View>
          <View style={estilos02.calendario}>
            <Text style={estilos02.texto02}>18</Text>
            <Text style={estilos02.texto02}>19</Text>
            <Text style={estilos02.texto02}>20</Text>
            <Text style={estilos02.texto02}>21</Text>
            <Text style={estilos02.texto02}>22</Text>
            <Text style={estilos02.texto02}>23</Text>
            <Text style={estilos02.texto02}>24</Text>
          </View>
          <View style={estilos02.calendario}>
            <Text style={estilos02.texto02}>25</Text>
            <Text style={estilos02.texto02}>26</Text>
            <Text style={estilos02.texto02}>27</Text>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: "rgba(22, 93, 36, 1)",
                padding: 5,
                marginTop: -5,
              }}
            >
              <Text style={estilos02.texto02}>28</Text>
            </View>
            <Text style={estilos02.texto02}>29</Text>
            <Text style={estilos02.texto02}>30</Text>
            <Text style={estilos02.texto02}>31</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "rgba(154, 154, 154, 0.22)",
            width: 330,
            height: 200,
            alignSelf: "center",
            marginTop: 40,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 25,
              marginTop: 15,
              marginLeft: 20,
            }}
          >
            Hoje
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              marginLeft: 20,
            }}
          >
            <Fontisto name="favorite" size={20} color="white" />
            <Text style={{ color: "white", fontSize: 15 }}>
              {" "}
              Nenhum Evento Agendado
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "rgba(19, 40, 21, 1)",
    flex: 1,
  },
  imagem01: {
    alignItems: "center",
    marginTop: 10,
  },
});

const estilos02 = StyleSheet.create({
  calendario: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  texto01: {
    color: "rgba(79, 82, 88, 1)",
  },
  texto02: {
    color: "white",
  },
});

export default Perfil2;
