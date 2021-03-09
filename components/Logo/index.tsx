import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Logo() {
  return (
    <View style={styleComponent.logoView}>
      <Image source={require('./idea.png')} style={styleComponent.logoImage} />
      <View>
        <Text style={styleComponent.logoText}>English Numbers</Text>
      </View>
    </View>
  )
}

const styleComponent = StyleSheet.create({
  logoView: {
    alignItems: 'center'
  },
  logoImage: {
    width: 72,
    height: 97,
  },
  logoText: {
    color: 'white',
    fontSize: 32,
    marginTop: 20,
    textAlign: 'center'
  }
});
