import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from "../screens/Register";
import Login from "../screens/Login";
import Home from "../screens/Home";
import New from "../screens/New"
import Name from "../screens/Name"
import DataNasc from "../screens/DataNasc"
import Estado from "../screens/Estado"
import Contato from "../screens/Contato"
import CadConf from "../screens/CadConf"
import Perfil from "../screens/Perfil"
import DetalhesScreen from "../screens/DetalhesScreen";
import DetalhesCard from "../screens/DetalhesCard";
import ParticipacoesConfirmadas from "../screens/ParticipacoesConfirmadas";
import Perfil2 from "../screens/perfil2";
import FormParticipacao from '../screens/FormDeParticipacao'
import RevisaoInformacao from '../screens/RevisarInformacoes'
import Confirmado from '../screens/Confirmado'
import DetalhesConfirmados from '../screens/DetalhesConfirmados'
import DetalhesConfirmados1 from '../../src/screens/DethalhesConfirmados1'
import Cancelado from '../screens/Cancelado'
import Feedback from '../screens/Feedback'



const Stack = createNativeStackNavigator();




function Routes() {
  return (

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="DataNasc" component={DataNasc} />
        <Stack.Screen name="Estado" component={Estado} />
        <Stack.Screen name="Contato" component={Contato} />
        <Stack.Screen name="CadConf" component={CadConf} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Detail" component={DetalhesScreen} />
        <Stack.Screen name="Details" component={DetalhesCard} />
        <Stack.Screen name="ParticipacoesConfirmadas" component={ParticipacoesConfirmadas} />
        <Stack.Screen name="Perfil2" component={Perfil2} />
        <Stack.Screen name="FormParticipacao" component={FormParticipacao}/>
        <Stack.Screen name="RevisaoInformacao" component={RevisaoInformacao}/>
        <Stack.Screen name="Confirmado" component={Confirmado}/>
        <Stack.Screen name="DetalhesConfirmados" component={DetalhesConfirmados}/>
        <Stack.Screen name="DetalhesConfirmados1" component={DetalhesConfirmados1}/>
        <Stack.Screen name="Cancelado" component={Cancelado}/>
        <Stack.Screen name="Feedback" component={Feedback}/>
      </Stack.Navigator>

  );
}

export default Routes;