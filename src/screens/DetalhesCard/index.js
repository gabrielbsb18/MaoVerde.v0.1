// DetalhesCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const DetalhesCard = ({ route, navigation }) => {
    const { item } = route.params;
  
    const handleParticipar = () => {
      navigation.navigate('ParticipacoesConfirmadas', { eventId: item.id });
    };
  
    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <Button title="Participar" onPress={handleParticipar}   />
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',

  },
  cardImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  cardDescription: {
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default DetalhesCard;
