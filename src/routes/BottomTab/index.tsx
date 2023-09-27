import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Course, Round, Chat, Home } from '../../screens';
import { COLORS } from '../../utils/constants/themes';
import { BottomStackParamList } from '../../types/routes';

const Tab = createBottomTabNavigator<BottomStackParamList>();

export const BottomTabNavigator: FC = () => {
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
          title: 'ホーム',
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
          title: 'ラウンド',
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
          title: 'コース',
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
          title: 'チャット',
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
};
