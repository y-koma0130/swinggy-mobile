import { FC, useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseButton } from '../../../../components/buttons';
import { useGetScreenNameInput } from '../../stores/screenNameInput';
import { useScreenNameValidator } from '../../hooks/validations/screenName';
import { ScreenNameInput } from './Input';

/**
 * スクリーンネームの登録セクション
 */
export const ScreenNameInputSection: FC = () => {
  const input = useGetScreenNameInput();
  const validator = useScreenNameValidator();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const onPress = useCallback(() => {
    setErrorMessages(validator(input) || []);
    if (errorMessages.length === 0) {
      // TODO: 次のページへ
    }
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  button: {
    width: 240,
  },
});
