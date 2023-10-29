import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/themed";

const CadConf = () => {
  const navigation = useNavigation();

  const Home = () => {
    navigation.navigate("Home");
  };

  return (
    
    <ImageBackground
      source={require('../../../assets/Backgrund.png')} 
      style={styles.background}
    >
      
      <View style={styles.container}>
        <Image style={styles.confirmed} source={require('../../../assets/confirmed.png')} />
        <Text style={styles.text}>Conta criada com sucesso</Text>
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
          onPress={() => Home()}
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
    alignItems: "center",
    justifyContent: "center",
    fontSize: 48,
    backgroundColor: "transparent", // Torna o fundo transparente para a imagem de fundo ser visível
  },
  text: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 24,
    margin: 13,
  },
  confirmed: {
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default CadConf;
