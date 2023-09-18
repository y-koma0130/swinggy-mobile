import { FC } from 'react';
import { View } from 'react-native';
import { ScreenNameInput } from '.';
import { Text } from '@rneui/base';

export const ScreenNameInputSection: FC = () => {
  return (
    <View>
      <View style={{ marginBottom: 8 }}>
        <Text>・10文字以上</Text>
        <Text>・半角英数字とハイフン、アンダースコアが使えます</Text>
      </View>
      <ScreenNameInput />
    </View>
  );
};
