import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/themed";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object().shape({
  datanasc: yup.string().min(8, "A data deve conter DD/MM/AAAA").required("Campo obrigatório"),
})

const DataNasc = () => {
  const [data, setData] = useState("")
  const navigation = useNavigation();

  const Estado = () => {
    navigation.navigate("Estado");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleNavRegister = ()=> {
    if (!value || !/^\d{8}$/.test(value)) {
      Alert.alert(
        "Erro",
        "Por favor, insira a data de nascimento válido no formato DD/MM/AAAA."
      );
      return;
    }
  }

  return (
    <ImageBackground
      source={require("../../../assets/Backgrund.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Qual sua data de nascimento?</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              containerStyle={{ width: "80%" }}
              style={{ color: "white" }}
              value={value}
              onChangeText={onChange}
              placeholder="DD/MM/AAAA"
            />
          )}
          name="data"
          defaultValue={data}
        />

        {errors.data && (<Text style={{ color: "red" }}> {erros.data.message} </Text>)}

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
            marginHorizontal: 15,
            height: 72,
            width: 300,
          }}
          onPress={handleSubmit(Estado)}
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
    backgroundColor: "transparent",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 24,
    width: 300,
  },
});

export default DataNasc;
