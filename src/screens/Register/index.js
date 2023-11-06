import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Text,
} from "react-native";
import { Button, Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object().shape({
  username: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve conter pelo menos 6 digitos")
    .required("Informe sua senha"),
});

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  function handleNavRegister(data) {
    const { email, password, username } = data;
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
            <Controller
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  containerStyle={{ width: "80%" }}
                  style={{ color: "white" }}
                  placeholder="Seu username"
                  value={value}
                  onChangeText={onChange}
                />
              )}
              name="username"
              defaultValue={username}
            />
            {errors.username && (
              <Text style={{ color: "red" }}>{errors.username.message}</Text>
            )}

            <Controller
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  containerStyle={{ width: "80%" }}
                  style={{ color: "white" }}
                  placeholder="E-mail"
                  value={value}
                  onChangeText={onChange}
                />
              )}
              name="email"
              defaultValue={email}
            />
            {errors.email && (
              <Text style={{ color: "red" }}>{errors.email.message}</Text>
            )}

            <Controller
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  containerStyle={{ width: "80%" }}
                  style={{ color: "white" }}
                  placeholder="Senha"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={true}
                />
              )}
              name="password"
              defaultValue={password}
            />
            {errors.password && (
              <Text style={{ color: "red" }}>{errors.password?.message}</Text>
            )}
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
              onPress={handleSubmit(handleNavRegister)}
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
              onPress={handNewUser}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

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
