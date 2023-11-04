import React from "react";
import { View, StyleSheet, Text, ImageBackground, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const Name = () => {
  const navigation = useNavigation();

  const handName = () => {
    navigation.navigate("Name");
  };

  return (
    <ImageBackground
      source={require("../../../assets/Backgrund.png")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.centeredContent}>
          <Text style={styles.text}>Precisamos dos seus dados pessoais</Text>
          <Text style={styles.text1}>
            Para personalizarmos o seu perfil, precisamos que nos conte um pouco mais sobre você!
          </Text>
          <Button
            title="Continuar"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              backgroundColor: "rgba(25, 144, 51, 0.51)",
              borderRadius: 5,
            }}
            titleStyle={{ fontWeight: "bold", fontSize: 23 }}
            containerStyle={{
              width: 300,
              justifyContent: 'center',
            }}
            onPress={() => handName()}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#132815",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    margin: 13,
    width: 280,
  },
  text1: {
    color: "#fff",
    fontSize: 15,
    margin: 13,
    width: 285,
  },
});

export default Name;
