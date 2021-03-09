import React, { Fragment, useState, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Animated, Platform, Text, StyleSheet, View } from 'react-native';

// Problema em importar
import { TextNumber } from 'text-number';

// Solução 1: const { TextNumber } = require('text-number');
// Solução 2: criar um arquivo d.ts dentro de node-modules/@types/text-number

import { 
  Logo, 
  Input, 
  LabelWithText, 
  ButtonPrimary, 
  ButtonRounded,
  Spacer,
} from '../components';

import { ExitApp, numberRandom } from '../util';

export function GameScreen() {
  const [inputValue, setInputValue] = useState('');
  const [numberToWrite, setNumberToWrite] = useState(numberRandom().toString());
  const [actualScore, setActualScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const correctAnswerAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true
      }).start();
    });
  };

  const englishTextNumber = new TextNumber();

  AsyncStorage.getItem('@EnglishNumber').then(value => {
    value ? setHighScore(parseInt(value)) : setHighScore(0);
  });

  function verifyAnswer() {
    if (inputValue.trim().length === 0) return;

    // converte o numero em texto
    const numberLikeText = englishTextNumber.text(numberToWrite);
    let isAnswerCorrect = true;

    // verifica se o valor digitado condiz com o numero no formato de texto
    console.log('o que eu escrevi', inputValue.toLowerCase());
    console.log('resposta certa', numberLikeText);
    if (inputValue.toLowerCase() !== numberLikeText.toLowerCase()) isAnswerCorrect = false;

    const newNumberToWrite = numberRandom().toString();
    console.log('Novo numero', newNumberToWrite);
    console.log(englishTextNumber.text(newNumberToWrite));
    setNumberToWrite(newNumberToWrite);
    setInputValue('');

    // se sim, aumenta o score e verifica se é o novo highScore, se for, armazena o novo highScore
    if (isAnswerCorrect) {
      const newScore = actualScore + 1;
      setActualScore(newScore);
      correctAnswerAnimation();

      if (newScore > highScore) {
        AsyncStorage.setItem('@EnglishNumber', newScore.toString());
      }

      return;
    }

    // senão, informa que errou, o score atingido e reinicia o jogo
    Alert.alert('Wrong answer!', `You got ${actualScore} correct answer${actualScore !==1 ? 's' : ''}. Keep playing!`)
    setActualScore(0);
  }

  return (
    <Fragment>
      <Animated.View
        style={[
          componentStyle.fadingContainer, { opacity: fadeAnim, position: 'absolute' }
        ]}
      >
        <Text style={componentStyle.textCorrect}>Correct answer!</Text>
      </Animated.View>

      <View>
        <Logo />
        <Spacer />

        <Input value={inputValue} onChangeText={text => setInputValue(text)} />

        <LabelWithText label="Write this number:" text={numberToWrite} />
        <Spacer />

        <ButtonPrimary label="Verify Answer" onPress={verifyAnswer} />
        <Spacer />

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <LabelWithText label="Current score:" text={actualScore.toString()} />
          <LabelWithText label="highest score:" text={highScore.toString()} />
        </View>        
      </View>

      {Platform.OS === 'android' && (
        <View style={componentStyle.footer}>
          <ButtonRounded label='Exit' onPress={() => ExitApp()} />
        </View>
      )}      
    </Fragment>
  )
}

const componentStyle = StyleSheet.create({
  footer: {
    alignSelf: 'flex-end'
  },
  fadingContainer: {
    backgroundColor: "powderblue",
    padding: 16,
    top: '50%',
    zIndex: 1,
    width: '100%',
  },
  textCorrect: {
    textAlign: 'center',
  }
});