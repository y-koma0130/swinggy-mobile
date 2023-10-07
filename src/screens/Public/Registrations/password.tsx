import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { PasswordInputSection } from '../../../features/registrations/components/passwords';

/**
 * パスワード登録ページ
 */
export const Password: FC = () => {
  return (
    <View style={styles.container}>
      <PasswordInputSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
});
