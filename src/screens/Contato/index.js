import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/themed";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object().shape({
  contato: yup.string().matches(/^\(\+\d{2}\) \(\d{2}\) \d{5}-\d{4}$/, "Formato inválido").required("Campo obrigatório"),
});

const Contato = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleCadConf = () => {
   
    navigation.navigate("CadConf");
  };

  return (
    <ImageBackground
      source={require("../../../assets/Backgrund.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Qual seu número para contato?</Text>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              containerStyle={{ width: "85%" }}
              style={{ color: "white" }}
              placeholder="(+55) (00) 00000-0000"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="contato"
          defaultValue=""
        />
        {errors.contato && (
          <Text style={{ color: "red" }}>{errors.contato.message}</Text>
        )}
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
            width: 310,
          }}
          onPress={handleSubmit(handleCadConf)}
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
    width: 310,
  },
});

export default Contato;
