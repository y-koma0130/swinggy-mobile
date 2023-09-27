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
  const backgroundColor = useMemo<string>(() => {
    return color === 'PRIMARY' ? COLORS.PRIMARY : 'white';
  }, [color]);
  const borderColor = useMemo<string>(() => {
    return color === 'PRIMARY' ? 'white' : COLORS.PRIMARY;
  }, [color]);
  const borderWidth = useMemo<number | undefined>(() => {
    return color === 'PRIMARY' ? undefined : 1;
  }, [color]);
  return (
    <Button
      title={label}
      type={variant}
      titleStyle={{ ...styles.label, color: borderColor }}
      buttonStyle={{
        ...styles.button,
        backgroundColor,
        borderColor,
        borderWidth,
      }}
      disabled={isDisabled}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 20,
  },
  label: {
    fontWeight: '400',
  },
});
