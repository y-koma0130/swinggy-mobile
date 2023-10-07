import { FC, useCallback, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseButton } from '../../../../components/buttons';
import {
  useGetPasswordInput,
  useGetPasswordReInput,
} from '../../stores/userRegistrationInputStore';
import { PasswordInput } from './Input';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/native';
// import { PublicStackParamList } from '../../../../types/routes';
import { usePasswordValidator } from '../../hooks/validations/password';

/**
 * パスワードの登録セクション
 */
export const PasswordInputSection: FC = () => {
  const input = useGetPasswordInput();
  const reinput = useGetPasswordReInput();
  const validator = usePasswordValidator();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  // const { navigate } = useNavigation<StackNavigationProp<PublicStackParamList, 'EMAIL_ADDRESS'>>();

  const onPress = useCallback(() => {
    const errs = validator(input);
    if (errs && errs.length > 0) {
      setErrorMessages(errs);
      return;
    }
    if (input !== reinput) {
      setErrorMessages(['再入力と合致しません']);
      return;
    }
    console.log('登録OK');
    setErrorMessages([]);
    //   navigate('EMAIL_ADDRESS');
  }, [input, reinput, setErrorMessages]);
  const isDisabled = useMemo(() => {
    return input === '' || reinput === '';
  }, [input, reinput]);
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.inputContainer}>
        <PasswordInput errorMessages={errorMessages} />
      </View>
      <View style={styles.button}>
        <BaseButton
          label='登録完了'
          color='PRIMARY'
          onPress={onPress}
          isDisabled={isDisabled}
          variant='solid'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  button: {
    width: 240,
  },
});
