import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTab';

export default function MainRouter() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
