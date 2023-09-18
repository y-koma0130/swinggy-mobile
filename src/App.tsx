import React from 'react';
import { MainRouter } from './routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainRouter />
    </SafeAreaProvider>
  );
}
