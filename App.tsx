import React from 'react';
import Dashboard from './src/screens/Dashboard/Dashboard';
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import AppLoading from "expo-app-loading";

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
 } from "@expo-google-fonts/poppins";
import { StatusBar } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor = "#5636D3" />
      <Dashboard />
    </ThemeProvider>
  )
}

