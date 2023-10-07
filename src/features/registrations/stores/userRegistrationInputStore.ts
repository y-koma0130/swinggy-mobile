import { UserRegistration } from '../types/userRegistration';
import { atom, useAtom } from 'jotai';

/**
 * ユーザー新規登録の入力情報
 */
const userRegistrationInputStore = atom<UserRegistration>({
  screenName: '',
  emailAddress: '',
  password: '',
  password2: '',
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
      password: input.password,
      password2: input.password2,
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
      password: input.password,
      password2: input.password2,
    });
  };
};

/**
 * パスワードのゲッター
 */
export const useGetPasswordInput = (): string => {
  const [input] = useAtom(userRegistrationInputStore);
  return input.password;
};

/**
 * パスワードのセッター
 */
export const useSetPasswordInput = (): ((value: string) => void) => {
  const [input, setInput] = useAtom(userRegistrationInputStore);
  return (value: string) => {
    setInput({
      screenName: input.screenName,
      emailAddress: input.emailAddress,
      password: value,
      password2: input.password2,
    });
  };
};

/**
 * パスワード再入力のゲッター
 */
export const useGetPasswordReInput = (): string => {
  const [input] = useAtom(userRegistrationInputStore);
  return input.password2;
};

/**
 * パスワード再入力のセッター
 */
export const useSetPasswordReInput = (): ((value: string) => void) => {
  const [input, setInput] = useAtom(userRegistrationInputStore);
  return (value: string) => {
    setInput({
      screenName: input.screenName,
      emailAddress: input.emailAddress,
      password: input.password,
      password2: value,
    });
  };
};
