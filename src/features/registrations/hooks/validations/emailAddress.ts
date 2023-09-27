import { useCallback } from 'react';
import { ZodError } from 'zod';
import { emailAddressSchema } from '../../types/emailAddress';

/**
 * メールアドレスのバリデータ関数を返却するフック
 * @returns エラーの場合:エラーメッセージの string[]、そうでない場合: undefined を返却
 */
export const useEmailAddressValidator = (): ((value: string) => string[] | undefined) =>
  useCallback((value) => {
    try {
      emailAddressSchema.parse(value);
    } catch (e) {
      if (e instanceof ZodError) {
        return [...e.issues.map((err) => err.message)];
      }
    }
  }, []);
