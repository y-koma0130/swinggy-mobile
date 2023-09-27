import { FC } from 'react';
import { EntrySection } from '../../features/entries/components';
import { StyleSheet, View } from 'react-native';

export const Initial: FC = () => {
  return (
    <View style={styles.container}>
      <EntrySection />
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
