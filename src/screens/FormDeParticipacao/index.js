import React from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

import {} from "../DetalhesCard";

const FormParticipacao = () => {
  const navigation = useNavigation();

  const handleNavRevisar = () => {
    navigation.navigate("RevisaoInformacao");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.buttonPerfil}>
        <View style={{ justifyContent: "center" }}>
          <Image source={require("../../../assets/capaParticipacao.png")} />

          <Text style={styles.text}>Prevênção de </Text>
          <Text style={styles.text}>Incêndio </Text>
        </View>
      </View>
      <View style={styles.form}>
        <Text style={{ color: "#fff", marginLeft: 14, fontSize: 15 }}>
          Para confirmar sua inscrição, precisamos de algumas informações
          pessoais:
        </Text>
        <Text style={styles.textInput}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="white"
        />
        <Text style={styles.textInput}>Número para Contato</Text>
        <TextInput
          style={styles.input}
          placeholder="(00)00000-0000"
          placeholderTextColor="white"
        />
        <Text style={styles.textInput}>Número de Documento RG ou CPF</Text>
        <TextInput
          style={styles.input}
          placeholder="000000000000"
          placeholderTextColor="white"
        />
        <Text style={styles.textInput}>Endereço Residencial </Text>
        <TextInput
          style={styles.input}
          placeholder="Q 00 conj 00 casa 00,  Cidade - DF"
          placeholderTextColor="white"
        />
        <Text style={styles.textInput}>
          Você tem alguma restrição dietética?
        </Text>
        <TextInput
          style={styles.input}
          placeholder=""
          placeholderTextColor="white"
        />
      </View>

      {/* Botão personalizado */}
      <TouchableOpacity style={styles.customButton} onPress={handleNavRevisar}>
        <Text style={styles.customButtonText}>Participar</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    fontFamily: "",
    fontSize: 48,
    backgroundColor: "#132815",
    alignItems: "flex-start",
  },
  text: {
    color: "#fff",
    fontSize: 50,
    marginLeft: 14,
    fontWeight: "800",
  },
  text1: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 14,
  },
  buttonPerfil: {
    flexDirection: "row",
  },
  notif: {
    marginLeft: 200,
  },
  containerCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  card: {
    flex: 1,
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
    color: "#fff", // Altere para a cor desejada
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 13,
  },
  containerCard2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage2: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  card2: {
    flex: 1,
    paddingTop: 1,
    width: 100,
    height: 120,

    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    marginBottom: 8,
    marginLeft: 14,
    marginTop: 15,
  },
  input: {
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 8,
    height: 40,
    marginLeft: 14,
  },
  form: {
    width: 380,
  },
  customButton: {
    backgroundColor: "green",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    marginTop: 35,
    width: 111,
    height: 38,
    marginLeft: 20,
  },
  customButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default FormParticipacao;
