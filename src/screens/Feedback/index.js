import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, Text, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Feedback2 = () => {

    const [text, onChangeText] = React.useState('');
    const navigation = useNavigation();

    const handleGoBack = () => {
      navigation.goBack();
    };


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.box1}>
                    <Image style={styles.box1_1} source={require('../../../assets/Box3_Background.png')}/>
                    <TouchableOpacity style={styles.box1_1_1} onPress={handleGoBack}>
                         <Image source={require('../../../assets/Voltar.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.box2}>
                    <Text style={styles.box2_Text}>Prevênção de</Text>
                    <Text style={styles.box2_Text}>Incêndio</Text>
                </View>

                <View style={styles.box3}>
                    <View>
                        <View style={styles.box3_1}>
                            <Image source={require('../../../assets/Pessoa4.png')}/>
                            <View>
                                <Text >Rafhael</Text>
                                <Text style={styles.box3_1_Text}>Silva</Text>
                            </View>
                            <Text style={styles.box3_1_TextDes}>Instituto Brasília Ambiental, vai unir educação ambiental e ação social.
                                Esse ano, o projeto terá como palco o Parque Ecológico Três Meninas,</Text>
                        </View>
                        <View style={styles.box3_2}>
                            <View style={styles.box3_2_1}>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Meia_Estrela.png')}/>
                            </View>
                            <View style={styles.box3_2_1}>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Like.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/DesLike.png')}/>
                            </View>
                        </View>
                        <View style={styles.box3_Linha}></View>
                    </View>

                    <View>
                        <View style={styles.box3_1}>
                            <Image source={require('../../../assets/Pessoa3.png')}/>
                            <View>
                                <Text >Daniel</Text>
                                <Text style={styles.box3_1_Text}>Soares</Text>
                            </View>
                            <Text style={styles.box3_1_TextDes}>Instituto Brasília Ambiental, vai unir educação ambiental e ação social.
                                Esse ano, o projeto terá como palco o Parque Ecológico Três Meninas,</Text>
                        </View>
                        <View style={styles.box3_2}>
                            <View style={styles.box3_2_1}>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Meia_Estrela.png')}/>
                            </View>
                            <View style={styles.box3_2_1}>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Like.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/DesLike.png')}/>
                            </View>
                        </View>
                        <View style={styles.box3_Linha}></View>
                    </View>

                    <View>
                        <View style={styles.box3_1}>
                            <Image source={require('../../../assets/Pessoa2.png')}/>
                            <View>
                                <Text >Pedro</Text>
                                <Text style={styles.box3_1_Text}>Costa</Text>
                            </View>
                            <Text style={styles.box3_1_TextDes}>Instituto Brasília Ambiental, vai unir educação ambiental e ação social.
                                Esse ano, o projeto terá como palco o Parque Ecológico Três Meninas,</Text>
                        </View>
                        <View style={styles.box3_2}>
                            <View style={styles.box3_2_1}>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Meia_Estrela.png')}/>
                            </View>
                            <View style={styles.box3_2_1}>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Like.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/DesLike.png')}/>
                            </View>
                        </View>
                        <View style={styles.box3_Linha}></View>
                    </View>

                    <View>
                        <View style={styles.box3_1}>
                            <Image source={require('../../../assets/Pessoa1.png')}/>
                            <View>
                                <Text >Rafhael</Text>
                                <Text style={styles.box3_1_Text}>Silva</Text>
                            </View>
                            <Text style={styles.box3_1_TextDes}>Instituto Brasília Ambiental, vai unir educação ambiental e ação social.
                                Esse ano, o projeto terá como palco o Parque Ecológico Três Meninas,</Text>
                        </View>
                        <View style={styles.box3_2}>
                            <View style={styles.box3_2_1}>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Estrela.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Meia_Estrela.png')}/>
                            </View>
                            <View style={styles.box3_2_1}>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/Like.png')}/>
                                <Image style={styles.box3_2_1_img} source={require('../../../assets/DesLike.png')}/>
                            </View>
                        </View>
                        <View style={styles.box3_Linha}></View>
                    </View>

                    <View style={styles.box3_3}>
                        <Image source={require('../../../assets/PerfilQuad.png')}/>
                        <View style={styles.box3_3_1}>
                        <TextInput
                            style={{marginLeft: 10}}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Adicionar comentário..."
                        />
                            <TouchableOpacity style={{marginRight: 10}}>
                                <Image source={require('../../../assets/Enviar_icon.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#132815',
    },
    box1: {
    },
        box1_1: {
            resizeMode: 'cover',
            borderBottomRightRadius: 40,
            maxHeight: 190,
            width: 420

        },
            box1_1_1: {
                position: 'absolute',
                top: 20,
                left: 20
            },
    box2: {
        marginLeft: 35,
        marginTop: -85
    },
        box2_Text: {
            fontSize: 28,
            color: 'white',
        },
    box3: {
        borderRadius: 40,
        marginHorizontal: 30,
        marginTop: 20,
        backgroundColor: 'rgba(154, 154, 154, 0.22)'
    },
        box3_1: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 25,
        },
            box3_1_Text: {
                fontSize: 10,
                marginTop: -2
            },
            box3_1_TextDes: {
                fontSize: 9,
                width: 200
            },
        box3_2: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginTop: 5,
        },
            box3_2_1: {
                flexDirection: 'row'
            },
                box3_2_1_img: {
                    marginHorizontal: 1,
                },
        box3_Linha: {
            alignSelf: 'center',
            backgroundColor: 'black',
            height: 1,
            width: 100,
            marginTop: 20
        },
        box3_3: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginHorizontal: 15,
            marginTop: 50,
            marginBottom: 20,
            alignContent: 'center'
        },
            box3_3_1: {
                backgroundColor: '#D9D9D9',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: 220,
                height: 40,
                borderRadius: 40,
            }
}
)

export default Feedback2