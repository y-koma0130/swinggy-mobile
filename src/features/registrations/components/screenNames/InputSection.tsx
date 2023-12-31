import { FC, useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseButton } from '../../../../components/buttons';
import { useGetScreenNameInput } from '../../stores/userRegistrationInputStore';
import { useScreenNameValidator } from '../../hooks/validations/screenName';
import { ScreenNameInput } from './Input';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { PublicStackParamList } from '../../../../types/routes';

/**
 * スクリーンネームの登録セクション
 */
export const ScreenNameInputSection: FC = () => {
  const input = useGetScreenNameInput();
  const validator = useScreenNameValidator();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
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
        <ScreenNameInput errorMessages={errorMessages} />
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
