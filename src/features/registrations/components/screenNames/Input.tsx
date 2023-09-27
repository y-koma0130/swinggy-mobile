import { FC, useMemo } from 'react';
import { useSetScreeNameInput } from '../../stores/userRegistrationInputStore';
import { InputForm } from '../../../../components/forms';
import { Text, View } from 'react-native';

type ScreenNameInputProps = {
  errorMessages: string[];
};

/**
 * スクリーンネームのインプットフォーム
 */
export const ScreenNameInput: FC<ScreenNameInputProps> = ({ errorMessages }) => {
  const setScreenNameInput = useSetScreeNameInput();
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
        placeholder='ユーザー名'
        onChanged={(value) => {
          setScreenNameInput(value);
        }}
        errorMessage={errorMessage}
      />
    </View>
  );
};
