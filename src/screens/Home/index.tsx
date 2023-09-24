import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
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
      <ScreenNameInputSection />
    </View>
  );
};
