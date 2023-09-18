import { FC, useMemo } from 'react';
import { Button } from '@rneui/themed';
import { COLORS } from '../../utils/constants/themes';

type SoliduttonProps = {
  label: string;
  onPress?: () => void;
  color: 'PRIMARY' | 'WHITE';
  isDisabled?: boolean;
};

export const SolidButton: FC<SoliduttonProps> = ({ label, onPress, color, isDisabled }) => {
  const bgColor = useMemo<string>(() => {
    return color === 'PRIMARY' ? COLORS.PRIMARY : 'white';
  }, [color]);
  return (
    <Button
      title={label}
      type='solid'
      containerStyle={{ borderRadius: 20, minWidth: 80 }}
      buttonStyle={{ backgroundColor: bgColor, paddingHorizontal: 10 }}
      disabled={isDisabled}
      onPress={onPress}
    />
  );
};
