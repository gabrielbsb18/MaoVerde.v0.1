import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/themed";

const Home = () => {
  const navigation = useNavigation();

  const handleNavRegister = () => {
    navigation.navigate("Home");
  };

  const handNewUser = () => {
    navigation.navigate("New");
  };

  return (
    <ImageBackground
      source={require("../../../assets/Backgrund.png")}
      style={styles.background}
    >
      <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Input
            containerStyle={{ width: "80%"}}
            style={{ color: "white" }}
            placeholder="E-mail"
          />

          <Input
            containerStyle={{ width: "80%" }}
            style={{ color: "white" }}
            placeholder="Senha"
            secureTextEntry={true}
          />
        </View>

        <View>
          <Button
            title="Login"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              backgroundColor: "rgba(25, 144, 51, 0.51)",
              borderRadius: 5,
              width:315,
            }}
            titleStyle={{ fontWeight: "bold", fontSize: 23 }}
            containerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => handleNavRegister()}
          />
          <Button
            title="Cadastrar"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              backgroundColor: "rgba(25, 144, 51, 0.51)",
              borderRadius: 5,
              width:315,
              marginTop:15
            }}
            titleStyle={{ fontWeight: "bold", fontSize: 23 }}
            containerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => handNewUser()}
          />
        </View>
      </ScrollView>
      </SafeAreaView>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default Home;
