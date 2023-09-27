import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenNameInputSection } from '../../../features/registrations/components/screenNames';

/**
 * スクリーンネーム登録ページ
 */
export const ScreenName: FC = () => {
  return (
    <View style={styles.container}>
      <ScreenNameInputSection />
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
