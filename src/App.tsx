import React from 'react';
import { MainRouter } from './routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from 'react-native-dotenv';

export default function App() {
  console.log('application is running...🚀');
  return (
    <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENT_ID}>
      <SafeAreaProvider>
        <MainRouter />
      </SafeAreaProvider>
    </Auth0Provider>
  );
}
