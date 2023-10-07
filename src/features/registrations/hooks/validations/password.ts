import { useCallback } from 'react';
import { ZodError } from 'zod';
import { passwordSchema } from '../../types';

/**
 * パスワードのバリデータ関数を返却するフック
 * @returns エラーの場合:エラーメッセージの string[]、そうでない場合: undefined を返却
 */
export const usePasswordValidator = () =>
  useCallback((input: string) => {
    try {
      passwordSchema.parse(input);
    } catch (e) {
      if (e instanceof ZodError) {
        return [...e.issues.map((err) => err.message)];
      }
    }
  }, []);
