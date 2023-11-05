import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

const FormParticipacao = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [documento, setDocumento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [restricaoDietetica, setRestricaoDietetica] = useState(''); // Adicionando a variável restricaoDietetica

  const [erro, setErro] = useState('');

  const handleNavRevisar = () => {
    if (!nome) {
      setErro('Por favor, insira seu Nome Completo.');
    } else if (!telefone || !/^\d{11}$/.test(telefone)) {
      setErro('Por favor, insira um Número para Contato válido no formato 00000000000.');
    } else if (!documento || !/^\d{11}$/.test(documento)) {
      setErro('Por favor, insira um Número de Documento válido no formato 000000000000.');
    } else if (!endereco) {
      setErro('Por favor, insira seu Endereço Residencial.');
    } else if (!restricaoDietetica) {
      setErro('Por favor, informe sua Restrição Dietética.');
    } else {
      setErro('');
      navigation.navigate("RevisaoInformacao");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.buttonPerfil}>
          <View style={{ justifyContent: "center" }}>
            <Image source={require("../../../assets/capaParticipacao.png")} />

            <Text style={styles.text}>Prevenção de </Text>
            <Text style={styles.text}>Incêndio </Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={{ color: "#fff", marginLeft: 14, fontSize: 15 }}>
            Para confirmar sua inscrição, precisamos de algumas informações pessoais:
          </Text>
          <Text style={styles.textInput}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="white"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <Text style={styles.textInput}>Número para Contato</Text>
          <TextInput
            style={styles.input}
            placeholder="00000000000"
            placeholderTextColor="white"
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
          />
          <Text style={styles.textInput}>Número de Documento RG ou CPF</Text>
          <TextInput
            style={styles.input}
            placeholder="000000000000"
            placeholderTextColor="white"
            value={documento}
            onChangeText={(text) => setDocumento(text)}
          />
          <Text style={styles.textInput}>Endereço Residencial</Text>
          <TextInput
            style={styles.input}
            placeholder="Q 00 conj 00 casa 00,  Cidade - DF"
            placeholderTextColor="white"
            value={endereco}
            onChangeText={(text) => setEndereco(text)}
          />
          <Text style={styles.textInput}>Restrição Dietética</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe sua Restrição Dietética"
            placeholderTextColor="white"
            value={restricaoDietetica}
            onChangeText={(text) => setRestricaoDietetica(text)}
          />
          {erro ? <Text style={styles.erroText}>{erro}</Text> : null}
          <TouchableOpacity style={styles.customButton} onPress={handleNavRevisar}>
            <Text style={styles.customButtonText}>Participar</Text>
          </TouchableOpacity>
        </View>
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
