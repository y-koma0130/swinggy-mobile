import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { EmailAddressInputSection } from '../../../features/registrations/components/emailAddresses';

/**
 * スクリーンネーム登録ページ
 */
export const EmailAddress: FC = () => {
  return (
    <View style={styles.container}>
      <EmailAddressInputSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 84,
  },
});
