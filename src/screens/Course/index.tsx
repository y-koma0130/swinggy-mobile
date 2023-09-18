import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Course: FC = () => {
  return (
    <View style={styles.container}>
      <Text>コース</Text>
    </View>
  );
};
