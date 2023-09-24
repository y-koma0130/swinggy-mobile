import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomStackParamList } from '../../../types/screens';
import { Home } from '../../../screens';
const Stack = createStackNavigator<BottomStackParamList>();

export const HomeNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName={'HOME'} screenOptions={{ headerStyle: { borderWidth: 1 } }}>
      <Stack.Screen
        name={'HOME'}
        component={Home}
        options={{
          title: 'ホーム',
        }}
      />
      {/* <Stack.Screen
        name={'DETAIL'}
        component={Detail}
        options={{
          title: '詳細画面',
        }}
      /> */}
    </Stack.Navigator>
  );
};
