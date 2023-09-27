import { FC, useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseButton } from '../../../../components/buttons';
import { useGetEmailAddressInput } from '../../stores/userRegistrationInputStore';
import { useEmailAddressValidator } from '../../hooks/validations';
import { EmailAddressInput } from '.';
import { StackNavigationProp } from '@react-navigation/stack';
import { PublicStackParamList } from '../../../../types/routes';
import { useNavigation } from '@react-navigation/native';

/**
 * メールアドレスの登録セクション
 */
export const EmailAddressInputSection: FC = () => {
  const input = useGetEmailAddressInput();
  const validator = useEmailAddressValidator();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  // TODO: 遷移先修正
  const { navigate } = useNavigation<StackNavigationProp<PublicStackParamList, 'EMAIL_ADDRESS'>>();

  const onPress = useCallback(() => {
    const errs = validator(input);
    if (errs && errs.length > 0) {
      setErrorMessages(errs);
      return;
    }
    setErrorMessages([]);
    navigate('EMAIL_ADDRESS');
  }, [input, setErrorMessages, errorMessages]);
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.inputContainer}>
        <EmailAddressInput errorMessages={errorMessages} />
      </View>
      <View style={styles.button}>
        <BaseButton
          label='次へ'
          color='PRIMARY'
          onPress={onPress}
          isDisabled={input === ''}
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
    marginBottom: 80,
  },
  button: {
    width: 240,
  },
});
