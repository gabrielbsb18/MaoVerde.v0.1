import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from "./tab.routes";
import  Perfil2  from "../screens/perfil2";
import Login from "../screens/Home";


const Stack = createNativeStackNavigator();



export default function StackRoutes() {
  return (

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Perfil2" component={Perfil2} />
      </Stack.Navigator>

  );
}