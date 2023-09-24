import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './BottomTab';
import { PublicNavigator } from './Public/Public';

export const MainRouter: FC = () => {
  // ログイン状態をステート管理？
  const isRegistered = false;
  return (
    <NavigationContainer>
      {isRegistered ? <BottomTabNavigator /> : <PublicNavigator />}
    </NavigationContainer>
  );
};
