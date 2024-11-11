import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/routers/routers';
import { AuthProvider } from './src/contexts/auth';
import { PersonProvider } from './src/contexts/person';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <PersonProvider>
        <AuthProvider>
          <Routers />
          <StatusBar style='auto' />
        </AuthProvider>
      </PersonProvider>
    </NavigationContainer>
  );
}
