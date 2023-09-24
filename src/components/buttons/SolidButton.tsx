import { FC, useMemo } from 'react';
import { Button } from '@rneui/themed';
import { COLORS } from '../../utils/constants/themes';
import { StyleSheet } from 'react-native';

type BaseButtonProps = {
  label: string;
  onPress?: () => void;
  color: 'PRIMARY' | 'WHITE';
  variant: 'solid' | 'outline';
  isDisabled?: boolean;
};

/**
 * ベースボタン
 */
export const BaseButton: FC<BaseButtonProps> = ({ label, onPress, color, isDisabled, variant }) => {
  const bgColor = useMemo<string>(() => {
    return color === 'PRIMARY' ? COLORS.PRIMARY : 'white';
  }, [color]);
  return (
    <Button
      title={label}
      type={variant}
      containerStyle={styles.container}
      buttonStyle={{ backgroundColor: bgColor, ...styles.button }}
      disabled={isDisabled}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    minWidth: 80,
  },
  button: {
    paddingHorizontal: 10,
    height: 40,
  },
});
