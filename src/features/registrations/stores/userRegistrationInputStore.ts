import { UserRegistration } from '../types/userRegistration';
import { atom, useAtom } from 'jotai';

/**
 * ユーザー新規登録の入力情報
 */
const userRegistrationInputStore = atom<UserRegistration>({
  screenName: '',
  emailAddress: '',
});

/**
 * ユーザー名のゲッター
 */
export const useGetScreenNameInput = (): string => {
  const [input] = useAtom(userRegistrationInputStore);
  return input.screenName;
};

/**
 * ユーザー名のセッター
 */
export const useSetScreeNameInput = (): ((value: string) => void) => {
  const [input, setInput] = useAtom(userRegistrationInputStore);
  return (value: string) => {
    setInput({
      screenName: value,
      emailAddress: input.emailAddress,
    });
  };
};

/**
 * メールアドレスのゲッター
 */
export const useGetEmailAddressInput = (): string => {
  const [input] = useAtom(userRegistrationInputStore);
  return input.emailAddress;
};

/**
 * メールアドレスのセッター
 */
export const useSetEmailAddressInput = (): ((value: string) => void) => {
  const [input, setInput] = useAtom(userRegistrationInputStore);
  return (value: string) => {
    setInput({
      screenName: input.screenName,
      emailAddress: value,
    });
  };
};
