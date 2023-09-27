import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../../utils/constants/themes';
import { BaseButton } from '../../../components/buttons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { PublicStackParamList } from '../../../types/routes';

export const SignupButton: FC = () => {
  const { navigate } = useNavigation<StackNavigationProp<PublicStackParamList, 'SCREEN_NAME'>>();
  return (
    <View style={styles.button}>
      <BaseButton
        label='新規登録'
        color='PRIMARY'
        variant='solid'
        onPress={() => navigate('SCREEN_NAME')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    fontFamily: '',
    marginBottom: 40,
  },
  button: {
    width: 240,
  },
});
