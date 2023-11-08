import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/themed";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object().shape({
  datanasc: yup.string().matches(/^\d{2}\/\d{2}\/\d{4}$/, "Formato inválido (DD/MM/AAAA)").required("Campo obrigatório"),
});

const DataNasc = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleEstado = () => {
    // Navegue para a próxima tela ou execute ação necessária.
    navigation.navigate("Estado");
  };

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
              placeholder="DD/MM/AAAA"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="datanasc"
          defaultValue=""
        />

        {errors.datanasc && (<Text style={{ color: "red" }}> {errors.datanasc.message} </Text>)}

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
          onPress={handleSubmit(handleEstado)}
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
    justifyContent: "center",
    alignItems: "center",
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
