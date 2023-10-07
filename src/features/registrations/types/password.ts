import { ZodError, z } from 'zod';

export const passwordSchema = z
  .string()
  .nonempty()
  .min(8, { message: '8文字以上で入力してください' })
  .refine((arg) => /^[A-Za-z0-9_-]+$/.test(arg), {
    message: '半角英数字、(-)、(_)が使用できます',
  });

export type Password = z.infer<typeof passwordSchema>;

/**
 * 入力が Password 型でない場合、エラーの配列を返却する
 */
export const useIsPassword = (value: unknown): string[] | undefined => {
  try {
    passwordSchema.parse(value);
    return [];
  } catch (e) {
    if (e instanceof ZodError) {
      return [...e.issues.map((err) => err.message)];
    }
  }
};
