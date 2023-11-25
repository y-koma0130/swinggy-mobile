import { FC, useCallback, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseButton } from '../../../../components/buttons';
import {
  // useGetPasswordInput,
  // useGetPasswordReInput,
  useUserInput,
} from '../../stores/userRegistrationInputStore';
import { PasswordInput } from './Input';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/native';
// import { PublicStackParamList } from '../../../../types/routes';
import { usePasswordValidator } from '../../hooks/validations/password';
import Auth0 from 'react-native-auth0';
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from 'react-native-dotenv';
/**
 * パスワードの登録セクション
 */
export const PasswordInputSection: FC = () => {
  // const input = useGetPasswordInput();
  // const reinput = useGetPasswordReInput();
  const user = useUserInput();
  const validator = usePasswordValidator();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const auth0 = new Auth0({
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_CLIENT_ID,
  });
  // const { navigate } = useNavigation<StackNavigationProp<PublicStackParamList, 'EMAIL_ADDRESS'>>();

  const onPress = useCallback(async () => {
    const errs = validator(user.password);
    if (errs && errs.length > 0) {
      setErrorMessages(errs);
      return;
    }
    if (user.password !== user.password2) {
      setErrorMessages(['再入力と合致しません']);
      return;
    }
    const result = await auth0.auth.createUser({
      email: user.emailAddress,
      password: user.password,
      connection: 'Username-Password-Authentication',
    });
    console.log('登録OK', result);
    setErrorMessages([]);
    //   navigate('EMAIL_ADDRESS');
  }, [user, setErrorMessages]);
  const isDisabled = useMemo(() => {
    return user.password === '' || user.password2 === '';
  }, [user]);

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
