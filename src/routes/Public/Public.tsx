import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';
import { ScreenName } from '../../screens/Public/Registrations';
import { Initial } from '../../screens/Public';
import { PublicStackParamList } from '../../types/routes';
import { EmailAddress } from '../../screens/Public/Registrations/emailAddress';

const Stack = createStackNavigator<PublicStackParamList>();

export const PublicNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        name={'INITIAL'}
        component={Initial}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'SCREEN_NAME'}
        component={ScreenName}
        options={{
          title: 'ユーザー名',
        }}
      />
      <Stack.Screen
        name={'EMAIL_ADDRESS'}
        component={EmailAddress}
        options={{
          title: 'メールアドレス',
        }}
      />
    </Stack.Navigator>
  );
};
