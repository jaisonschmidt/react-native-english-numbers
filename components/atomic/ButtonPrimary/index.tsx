import React, { ReactElement } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

import { Constants as C } from '../../../assets/theme/';

interface ButtonPrimaryProps extends PressableProps {
  /** Texto exibido ao usuário */
  label: string
}

export default function ButtonPrimary({ label = "Button", onPress = () => {} }: ButtonPrimaryProps): ReactElement {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? 'black'
          : 'transparent'
      },
      styleComponent.buttonPrimary
    ]}>
      <Text style={styleComponent.buttonLabel}>
        {label}
      </Text>
    </Pressable>
  )
}

const styleComponent = StyleSheet.create({
  buttonPrimary: {
    alignItems: 'center',
    borderColor: C.WHITE_PRIMARY,
    borderWidth: C.BORDER_NORMAL,
    borderRadius: C.BORDER_RADIUS,
    padding: C.PADDING_MD,
  },
  buttonLabel: {
    color: C.WHITE_PRIMARY,
  }
});