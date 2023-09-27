import { FC, useMemo } from 'react';
import { View } from 'react-native';
import { InputForm } from '../../../../components/forms';
import { useSetEmailAddressInput } from '../../stores/userRegistrationInputStore';

type EmailAddressInputProps = {
  errorMessages: string[];
};

/**
 * メールアドレスのインプットフォーム
 */
export const EmailAddressInput: FC<EmailAddressInputProps> = ({ errorMessages }) => {
  const setEmailAddressInput = useSetEmailAddressInput();
  const errorMessage = useMemo(() => {
    return errorMessages.join('\n');
  }, [errorMessages]);
  return (
    <View>
      <InputForm
        placeholder='メールアドレス'
        onChanged={(value) => {
          setEmailAddressInput(value);
        }}
        errorMessage={errorMessage}
      />
    </View>
  );
};
