import { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { InputForm } from '../../../../components/forms';
import {
  useSetPasswordInput,
  useSetPasswordReInput,
} from '../../stores/userRegistrationInputStore';

type PasswordInputProps = {
  errorMessages: string[];
};

/**
 * パスワードのインプットフォーム
 */
export const PasswordInput: FC<PasswordInputProps> = ({ errorMessages }) => {
  const setPasswordInput = useSetPasswordInput();
  const setPasswordReInput = useSetPasswordReInput();
  const errorMessage = useMemo(() => {
    return errorMessages.join('\n');
  }, [errorMessages]);
  return (
    <View>
      <View style={{ marginBottom: 8 }}>
        <Text>・8文字以上</Text>
        <Text>・半角英数字と(-), (_)が使用できます</Text>
      </View>
      <InputForm
        placeholder='パスワード'
        onChanged={(value) => {
          setPasswordInput(value);
        }}
      />
      <InputForm
        placeholder='再入力'
        onChanged={(value) => {
          setPasswordReInput(value);
        }}
        errorMessage={errorMessage}
      />
    </View>
  );
};
