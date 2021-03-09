import { Alert, BackHandler } from 'react-native';

/** Chama um objeto Alert solicitando se o usuário deseja encerrar a aplicação */
export function ExitApp() {
  Alert.alert(
    'Sair',
    'Deseja sair da aplicação?',
    [
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => console.log('Cancelou'),
      },
      { 
        text: 'Sair', 
        onPress: () => BackHandler.exitApp(), 
      }
    ],
  )
}