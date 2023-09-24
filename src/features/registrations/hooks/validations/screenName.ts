import { ZodError } from 'zod';
import { screenNameSchema, useIsScreenName } from './../../types/screenName';
import { useCallback } from 'react';

/**
 * スクリーンネームのバリデータ関数を返却するフック
 * @returns エラーの場合:エラーメッセージの string[]、そうでない場合: undefined を返却
 */
export const useScreenNameValidator = (): ((value: string) => string[] | undefined) =>
  useCallback((value) => {
    try {
      screenNameSchema.parse(value);
      return [];
    } catch (e) {
      if (e instanceof ZodError) {
        return [...e.issues.map((err) => err.message)];
      }
    }
  }, []);
