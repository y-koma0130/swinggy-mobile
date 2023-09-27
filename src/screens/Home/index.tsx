import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenNameInputSection } from '../../features/registrations/components/screenNames';

export const Home: FC = () => {
  return (
    <View style={styles.container}>
      <ScreenNameInputSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
