import React from 'react';

import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Constants as C } from '../../../assets/theme';

export default function Input({ style = styleComponent.inputPrimary, ...rest }: TextInputProps) {
  return (
    <TextInput style={style} { ...rest } />
  );
}

const styleComponent = StyleSheet.create({
  inputPrimary: {
    ...C.INPUT_PRIMARY
  }
})