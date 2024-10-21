documentação do firebase dos metodos de validação do email e senha:

[https://firebase.google.com/docs/auth/web/password-auth?hl=pt-br]()

npm i @react-native-async-storage/async-storage

npm i @react-native-async-storage/async-storage@1.23.1


importAsyncStoragefrom"@react-native-async-storage/async-storage";

initializeAuth:

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
