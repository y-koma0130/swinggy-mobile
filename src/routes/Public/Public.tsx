import { createStackNavigator } from '@react-navigation/stack';
import { FC, ReactElement } from 'react';
import { ScreenName } from '../../screens/Registrations/screenName';

const Stack = createStackNavigator();

export const PublicNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'ユーザー名'}
        component={ScreenName}
        options={{
          title: 'ユーザー名',
        }}></Stack.Screen>
    </Stack.Navigator>
  );
};
