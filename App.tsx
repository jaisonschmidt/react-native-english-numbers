// TODO: Refatorar a tela de GameScreen (melhorar a organização do código subdividindo Controller e View)
// TODO: Configurar Lint

import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

import { GameScreen } from './screen';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <View><Text>Carregando fonte</Text></View>;
  }

  return (
    <View style={componentStyle.container}>
      <GameScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const componentStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#512DA8',
    color: '#FFF',
    flex: 1,
    fontFamily: 'Poppins_400Regular',
    fontWeight: "400",
    justifyContent: 'space-between',
    padding: 40,
  },
});
