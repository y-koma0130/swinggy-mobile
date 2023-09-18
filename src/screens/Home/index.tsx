import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomStackParamList } from '../../types/screens';
import { SolidButton } from '../../components/buttons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Home() {
  const { navigate } = useNavigation<StackNavigationProp<BottomStackParamList>>();
  return (
    <View style={styles.container}>
      <Text>ホーム</Text>
      <TouchableOpacity onPress={() => navigate('ROUND')}>
        <Text>詳細画面へ遷移する</Text>
        <SolidButton label='登録' color='PRIMARY' />
      </TouchableOpacity>
    </View>
  );
}
