import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Round: FC = () => {
  return (
    <View style={styles.container}>
      <Text>ラウンド</Text>
    </View>
  );
};
