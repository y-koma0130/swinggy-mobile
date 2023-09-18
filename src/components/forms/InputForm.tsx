import { FC } from 'react';
import { Input } from '@rneui/themed';

type InputFormProps = {
  placeholder?: string;
};

export const InputForm: FC<InputFormProps> = ({ placeholder }) => {
  return (
    <Input
      placeholder={placeholder}
      inputContainerStyle={{ width: 300, borderWidth: 1, paddingLeft: 8, borderRadius: 2 }}
    />
  );
};
