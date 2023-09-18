import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { SolidButton } from '../../components/buttons';
import { ScreenNameInputSection } from '../../features/registrations/components/screenNames';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Home: FC = () => {
  // const { navigate } = useNavigation<StackNavigationProp<BottomStackParamList>>();
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigate('ROUND')}> */}
      {/* </TouchableOpacity> */}
      <View style={{ marginBottom: 10 }}>
        <ScreenNameInputSection />
      </View>
      <View style={{ width: 240 }}>
        <SolidButton label='登録' color='PRIMARY' />
      </View>
    </View>
  );
};
