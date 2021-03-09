import React, { ReactElement } from 'react';
import { Pressable, PressableProps, StyleSheet, Text, View} from 'react-native';
import { Constants as C } from '../../../assets/theme';

interface ButtonRoundedProps extends PressableProps {
  /** Texto exibido ao usuário */
  label: string
}

export default function ButtonRounded({label = '', ...props} : ButtonRoundedProps) : ReactElement {
  return (
    <Pressable style={componentStyle.container} {...props}>
      <View>
        <Text>{label}</Text>
      </View>
      <View style={componentStyle.circle}>
        <Text style={componentStyle.iconColor}>
          X
        </Text>
      </View>
    </Pressable>
  )
}

const componentStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  circle: {
    alignItems: 'center',
    backgroundColor: C.BLACK_PRIMARY,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginLeft: 10,
    width: 40,
  },
  iconColor: {
    color: C.WHITE_PRIMARY,
  }
});