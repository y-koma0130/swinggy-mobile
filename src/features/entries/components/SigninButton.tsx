import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseButton } from '../../../components/buttons';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/native';
// import { PublicStackParamList } from '../../../types/screens';

export const SigninButton: FC = () => {
  // const { navigate } = useNavigation<StackNavigationProp<PublicStackParamList, 'SCREEN_NAME'>>();
  return (
    <View style={styles.button}>
      <BaseButton label='ログイン' color='WHITE' variant='outline' />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 240,
  },
});
