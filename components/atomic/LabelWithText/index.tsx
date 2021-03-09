import React, { ReactElement } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Constants as C } from '../../../assets/theme';

interface LabelWithTextProps {
  label?: String | null,
  text?: String | null,
}

export default function LabelWithText({ label = null, text = null }: LabelWithTextProps): ReactElement {
  return (
    <View style={styleComponent.container}>
      {label && <Text style={styleComponent.content}>{label}</Text>}
      {text && <Text style={[styleComponent.content, styleComponent.text]}>{text}</Text>}
    </View>
  );
}

const styleComponent = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  content: {
    color: C.TEXT_COLOR,
    fontFamily: C.FONT_FAMILY,
  },
  text: {
    fontSize: C.TEXT_MD,
    fontWeight: 'bold',
    paddingTop: C.PADDING_NORMAL
  }
});


