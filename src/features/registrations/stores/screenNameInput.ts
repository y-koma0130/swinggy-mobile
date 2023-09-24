import { atom, useAtom } from 'jotai';

const screenNameInput = atom<string>('');

export const useGetScreenNameInput = (): string => {
  const [screenName] = useAtom(screenNameInput);
  return screenName;
};

export const useSetScreeNameInput = (): ((value: string) => void) => {
  const [, setScreenName] = useAtom(screenNameInput);
  return setScreenName;
};
