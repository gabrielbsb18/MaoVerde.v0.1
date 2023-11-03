import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Check from '../../../components/check.js';
import {AuthContext} from '../../contexts/auth.js'
import { useContext } from 'react';

const Perfil = () => {
  const {user, username} = useContext(AuthContext)

  const navigation = useNavigation();

  const handleNavCalender = () => {
    navigation.navigate('Perfil2');
  };

  const handleNavSair = () => {
    navigation.navigate('Login');
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView>
        <TouchableOpacity onPress={handleGoBack}>
          <View style={{marginLeft: 20, marginTop: 20}}>
            <Image
              source={require('../../../assets/Voltar.png')}
            />
          </View>
        </TouchableOpacity>


        <View style={estilos.imagem01}>
          <Image source={require("../../../assets/Perfil.png")} />
          <Text style={{ marginTop: 13, fontSize: 26, color: "white" }}>
            {username.username}
          </Text>
          <Text style={{ marginTop: 5, fontSize: 17, color: "white" }}>
            {user.email}
          </Text>
        </View>

        <Text
          style={{
            marginTop: 13,
            marginLeft: 25,
            fontSize: 20,
            color: "white",
          }}
        >
          Preferências
        </Text>

        <View style={estilos01.box}>
          <View style={{ marginLeft: 10, marginVertical: 10 }}>
            <Check />
          </View>
        </View>

        <View style={estilos01.box2}>
          <View style={{ flexDirection: "row", marginLeft: 17, marginTop: 20 }}>
            <Image source={require("../../../assets/Pessoa1.png")} />
            <Image
              style={{ marginLeft: -20 }}
              source={require("../../../assets/Pessoa2.png")}
            />
            <Image
              style={{ marginLeft: -20 }}
              source={require("../../../assets/Pessoa3.png")}
            />
          </View>
          <TouchableOpacity style={estilos01.box3}>
          <Ionicons name="person-add-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            marginTop: 15,
            marginLeft: 25,
            fontSize: 20,
            color: "white",
          }}
        >
          Projetos Agendados
        </Text>

        <TouchableOpacity
          style={estilos02.box}
          onPress={() => handleNavCalender()}
        >
          <View style={estilos02.box1}>
            <View style={estilos02.box21}>
              <View style={{ marginLeft: 15 }}>
                <Text style={{ color: "white", fontSize: 8 }}>
                  Prevênção de Incêndio 🔥
                </Text>
                <Text style={{ color: "white", fontSize: 6 }}>
                  12:00 PM - 19:30 PM
                </Text>
              </View>
              <View style={{ marginRight: 10 }}>
                <Image source={require("../../../assets/Vector.png")} />
              </View>
            </View>
            <View style={estilos02.box211}>
              <View style={estilos02.box212}>
                <Text style={estilos02.texto01}>Domingo</Text>
                <Text style={estilos02.texto02_2}>27</Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(49, 56, 59, 1)",
                  width: 1,
                  height: 70,
                }}
              ></View>
              <View>
                <Text style={{ color: "rgba(49, 56, 59, 1)", fontSize: 10 }}>
                  Prevênção de Incêndio
                </Text>
                <Text style={{ color: "rgba(49, 56, 59, 1)", fontSize: 8 }}>
                  12:00 PM - 19:30 PM{" "}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              flex: 1,
              marginLeft: 10
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginBottom: 6,
                marginLeft: 13,
                marginTop: 9,
              }}
            >
              <Text style={{ fontSize: 10, color: "rgba(49, 56, 59, 1)" }}>
                Outubro{" "}
              </Text>
              <Text style={{ fontSize: 10, color: "rgba(22, 93, 36, 1)" }}>
                23
              </Text>
            </View>
            <View style={{alignSelf: "center"}}>
              <View style={estilos02.calendario}>
                <Text style={estilos02.texto01}>S</Text>
                <Text style={estilos02.texto01}>T</Text>
                <Text style={estilos02.texto01}>Q</Text>
                <Text style={estilos02.texto01}>Q</Text>
                <Text style={estilos02.texto01}>S</Text>
                <Text style={estilos02.texto02}>S</Text>
                <Text style={estilos02.texto02}>D</Text>
              </View>
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
                    padding: 2,
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
          </View>
        </TouchableOpacity>




        <TouchableOpacity
          style={{ marginTop: 55 }}
          onPress={() => handleNavSair()}
        >
          <View style={estilos.botao}>
            <Text style={{ color: 'white', margin: 10 }}>Sair</Text>
            <Ionicons name="exit-outline" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </ScrollView>
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
  botao: {
    backgroundColor: "rgba(25, 144, 51, 0.51)",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
  },
});

const estilos01 = StyleSheet.create({
  box: {
    alignSelf: "stretch",
    backgroundColor: "rgba(55, 72, 56, 0.18)",
    marginTop: 10,
    borderRadius: 20,

  },
  box2: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    backgroundColor: "rgba(25, 144, 51, 0.51)",
    marginTop: 20,
    borderRadius: 20,
  },
  box3: {
    marginTop: 26,
    marginRight: 20,
  },
});

const estilos02 = StyleSheet.create({
  box: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1
  },
  box1: {
    backgroundColor: "white",
    borderRadius: 20,
    flex: 2

  },
  box1_1: {
    backgroundColor: "white",
  },
  box21: {
    backgroundColor: "rgba(22, 93, 36, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 6,
    marginLeft: 6,
    marginRight: 6,
  },
  box211: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  box212: {
    marginTop: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  texto01: {
    fontSize: 12,
  },
  texto02: {
    fontSize: 6,
    color: "rgba(79, 82, 88, 1)",
  },
  calendario: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
    width: '90%'
  },
  texto01: {
    fontSize: 6,
    marginBottom: 25,
  },
  texto02_2: {
    fontSize: 50,
    marginTop: -25,
  },
});

export default Perfil;
