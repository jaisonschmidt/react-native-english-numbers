import React, { ReactElement } from 'react';
import { View } from 'react-native';

type SpaceValues = 10 | 20 | 30;

interface SpacerProps {
  space?: SpaceValues
}

export default function Spacer({ space = 10  } : SpacerProps) : ReactElement {
  return (
    <View style={{height: space}} />
  )
}