import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { FormContext } from "../../contexts/form";

const FormParticipacao = () => {
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [doc, setDoc] = useState("");
  const [endereco, setEndereco] = useState("");
  const [restricao, setRestricao] = useState("");

  const { Cadastro } = useContext(FormContext);

  const navigation = useNavigation();

  const handleNavRevisar = () => {
    if (!nome || nome.trim() === "") {
      Alert.alert("Erro", "Por favor, insira seu Nome Completo."); // teste 
      return;
    }

    if (!tel || !/^\d{11}$/.test(tel)) {
      Alert.alert(
        "Erro",
        "Por favor, insira um Número para Contato válido no formato 00000000000."
      );
      return;
    }

    if (!doc || !/^\d{11}$/.test(doc)) {
      Alert.alert(
        "Erro",
        "Por favor, insira um Número de CPF válido no formato 00000000000."
      );
      return;
    }

    if (!endereco || endereco.trim() === "") {
      Alert.alert("Erro", "Por favor, insira seu Endereço Residencial.");
      return;
    }

    // Restrição Dietética não é obrigatória, portanto não é validada

    Cadastro(nome, tel, doc, endereco);
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

          <View style={{ alignSelf: "stretch" }}>

            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={(text)=>setNome(text)}
              placeholder="Digite seu nome"
              placeholderTextColor="white"
            />

          </View>

          <Text style={styles.textInput}>Número para Contato</Text>
          <TextInput
            style={styles.input}
            value={tel}
            onChangeText={(text)=>setTel(text)}
            placeholder="(00)00000-0000"
            placeholderTextColor="white"
          />

          <Text style={styles.textInput}>Número do CPF</Text>
          <TextInput
            style={styles.input}
            value={doc}
            onChangeText={(text)=>setDoc(text)}
            placeholder="000000000000"
            placeholderTextColor="white"
          />

          <Text style={styles.textInput}>Endereço Residencial </Text>
          <TextInput
            style={styles.input}
            value={endereco}
            onChangeText={(text)=>setEndereco(text)}
            placeholder="Q 00 conj 00 casa 00,  Cidade - DF"
            placeholderTextColor="white"
          />

          <Text style={styles.textInput}> Você tem alguma restrição dietética?</Text>
          <TextInput
            style={styles.input}
            value={restricao}
            onChangeText={(text)=>setRestricao(text)}
            placeholder=""
            placeholderTextColor="white"
          />
        </View>

        
        <TouchableOpacity
          style={styles.customButton}
          onPress={handleNavRevisar}
        >
          <Text style={styles.customButtonText}>Participar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#132815",
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
    color: "#fff",
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
    marginHorizontal: 14,
    marginTop: 15,
  },
  input: {
    alignSelf: 'stretch',
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 8,
    height: 40,
    marginHorizontal: 14,
  },
  form: {
    alignItems: 'stretch'
  },
  customButton: {
    backgroundColor: "green",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    alignSelf: 'flex-end',
    marginTop: 35,
    marginRight: 15,
    marginBottom: 15,
  },
  customButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  erroText: {
    color: "red",
    marginLeft: 14,
  },
});

export default FormParticipacao;
