import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/themed";

const Estado = () => {
  const navigation = useNavigation();

  const handleNavRegister = () => {
    navigation.navigate("Home");
  };

  const Contato = () => {
    navigation.navigate("Contato");
  };

  return (
    <ImageBackground
      source={require("../../../assets/Backgrund.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Qual estado você está disponível?</Text>
        <Input
          containerStyle={{ width: "85%", marginTop: 220 }}
          style={{ color: "white" }}
          placeholder="Digite seu estado!"
        />
        <Button
          title="Continuar"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "rgba(25, 144, 51, 51)",
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 23 }}
          containerStyle={{
            marginHorizontal: 15,
            height: 72,
            width: 300,
            marginVertical: 0,
          }}
          onPress={() => Contato()}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "#132815",
  },
  container: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 42,
    backgroundColor: "transparent",
  },
  text: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 24,
    margin: 13,
  },
});

export default Estado;
