import { ZodError, z } from 'zod';

export const screenNameSchema = z
  .string()
  .nonempty()
  .min(8, { message: '8文字以上で入力してください' })
  .refine((arg) => /^[A-Za-z0-9_-]+$/.test(arg), { message: '半角英数字、(-)、(_)が使用できます' });

export type ScreenName = z.infer<typeof screenNameSchema>;

/**
 * 入力が ScreenName 型でない場合、エラーの配列を返却する
 */
export const useIsScreenName = (value: unknown): string[] | undefined => {
  try {
    screenNameSchema.parse(value);
    return [];
  } catch (e) {
    if (e instanceof ZodError) {
      return [...e.issues.map((err) => err.message)];
    }
  }
};
