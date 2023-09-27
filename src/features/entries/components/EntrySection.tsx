import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from './Title';
import { SignupButton } from './SignupButton';
import { SigninButton } from './SigninButton';

export const EntrySection: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWraper}>
        <Title />
      </View>
      <SignupButton />
      <SigninButton />
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
  titleWraper: {
    marginBottom: 40,
  },
});
