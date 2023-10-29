import {View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const DetalhesConfirmados1 = () => {
    const navigation = useNavigation();

    const Cancelar = () => {
      navigation.navigate("Cancelado");
    };

    const handleGoBack = () => {
        navigation.goBack();
      };

    return (



        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={{marginHorizontal: 25}}>
                <View style={styles.box1}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Image source={require('../../../assets/Voltar.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={30} color="white" />
                    </TouchableOpacity>
                </View>

                <Image style={{alignSelf: 'center', width: 350}} source={require('../../../assets/qrcode.png')} resizeMode="contain"/>

                <View style={styles.box3}>
                    <Image style={{height: 150, marginRight: 5}} source={require('../../../assets/Local.png')} resizeMode="contain"/>
                    <View>
                        <View>
                            <Text style={styles.box3_texto}>Chapada dos Viadeiros</Text>
                            <Text style={styles.box3_texto}>Fazenda IV</Text>
                        </View>
                        <Image style={{width: 280}} source={require('../../../assets/Mapa.png')} resizeMode="contain"/>
                    </View>
                </View>

                <TouchableOpacity style={{marginTop: 70}} onPress={() => Cancelar()}>
                    <View style={styles.botao}>
                        <Text style={{ color: 'white', margin:1}}>Cancelar Participação</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#132815',
    },
    box1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    box3: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
        box3_texto: {
            color: 'white',
            fontSize: 11,
        },
    botao: {
        backgroundColor: 'rgba(25, 144, 51, 0.51)',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        width: 300,
        height: 35,
        marginBottom:30
    }
}
)

export default DetalhesConfirmados1;