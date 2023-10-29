import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import ParticipacoesConfirmadas from "../screens/ParticipacoesConfirmadas";
import Feedback from "../screens/Feedback";
import Perfil2 from "../screens/perfil2";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      tabBar={props =>
      <BottomTabBar {...props} state={{...props.state, routes:  props.state.routes.slice(0,4)}}></BottomTabBar> } 
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: "Inicio",
        }}
      />

      <Tab.Screen
        name="ParticipacoesConfirmadas"
        component={ParticipacoesConfirmadas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="clock" color={color} size={size} />
          ),
          tabBarLabel: "Confirmado",
        }}
      />

      <Tab.Screen
        name="Feedback"
        component={Feedback}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-square" color={color} size={size} />
          ),
          tabBarLabel: "Feedback",
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          tabBarLabel: "Perfil",
        }}
      />

      {/* <Tab.Screen
        name="Perfil2"
        component={Perfil2}
      /> */}
    </Tab.Navigator>
  );
}
