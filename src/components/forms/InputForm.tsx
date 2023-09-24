import { FC } from 'react';
import { Input } from '@rneui/themed';
import { StyleSheet } from 'react-native';

type InputFormProps = {
  placeholder?: string;
  errorMessage?: string;
  onChanged?: (value: string) => void;
  isDisabled?: boolean;
};

/**
 * 入力フォーム
 */
export const InputForm: FC<InputFormProps> = ({
  placeholder,
  errorMessage,
  onChanged,
  isDisabled,
}) => {
  return (
    <Input
      placeholder={placeholder}
      inputContainerStyle={styles.inputForm}
      onChangeText={onChanged}
      errorMessage={errorMessage}
      disabled={isDisabled}
    />
  );
};

const styles = StyleSheet.create({
  inputForm: {
    width: 300,
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 2,
  },
});
