import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Course, Round, Chat, Home } from '../../screens';
import { COLORS } from '../../utils/constants/themes';
import { BottomStackParamList } from '../../types/screens';

const Tab = createBottomTabNavigator<BottomStackParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ borderWidth: 1, borderColor: COLORS.BLACK }}
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.INACTIVE,
        headerStyle: { borderWidth: 1, borderColor: COLORS.BLACK },
      }}
      initialRouteName={'HOME'}>
      <Tab.Screen
        name={'HOME'}
        component={Home}
        options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='home-outline'
              size={25}
              color={focused ? COLORS.PRIMARY : COLORS.INACTIVE}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'ROUND'}
        component={Round}
        options={{
          tabBarLabel: 'ラウンド',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='golf-tee'
              size={25}
              color={focused ? COLORS.PRIMARY : COLORS.INACTIVE}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'COURSE'}
        component={Course}
        options={{
          tabBarLabel: 'コース',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='golf'
              size={25}
              color={focused ? COLORS.PRIMARY : COLORS.INACTIVE}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'CHAT'}
        component={Chat}
        options={{
          tabBarLabel: 'チャット',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='chat-outline'
              size={25}
              color={focused ? COLORS.PRIMARY : COLORS.INACTIVE}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
