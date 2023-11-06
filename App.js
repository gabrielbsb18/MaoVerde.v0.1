import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import "react-native-gesture-handler";

import AuthProvider from "./src/contexts/auth";
import FormProvider from "./src/contexts/form";
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <FormProvider>
        <StatusBar style="light" />
        <Routes />
        </FormProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
