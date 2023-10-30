import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/themed";
import { AuthContext } from "../../contexts/auth";

export default function  Home  () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');


  const { signIn } = useContext(AuthContext);

  const navigation = useNavigation();

  function handleNavRegister() {
    signIn(email, password, username);
  }  

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
              containerStyle={{ width: "80%" }}
              style={{ color: "white" }}
              placeholder="Seu username"
              value={username}
              onChangeText={(text => setUsername(text))}
            /> 
            <Input
              containerStyle={{ width: "80%" }}
              style={{ color: "white" }}
              placeholder="E-mail"
              value={email}
              onChangeText={(text => setEmail(text))}
            />

            <Input
              containerStyle={{ width: "80%" }}
              style={{ color: "white" }}
              placeholder="Senha"
              secureTextEntry={true}
              value={password}
              onChangeText={(text)=>setPassword(text)}
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
                width: 315,
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
                width: 315,
                marginTop: 15,
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


