import { Text } from '@rneui/themed';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/constants/themes';

export const Title: FC = () => {
  return (
    <Text h1 h1Style={styles.title}>
      SWINGGY
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
});
