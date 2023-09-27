import { ZodError, z } from 'zod';

export const emailAddressSchema = z
  .string()
  .nonempty()
  .email({ message: '不正なメールアドレスです' });

export type EmailAddress = z.infer<typeof emailAddressSchema>;

/**
 * 入力が EmailAddress 型でない場合、エラーの配列を返却する
 */
export const useIsEmailAddress = (value: unknown): string[] | undefined => {
  try {
    emailAddressSchema.parse(value);
    return [];
  } catch (e) {
    if (e instanceof ZodError) {
      return [...e.issues.map((err) => err.message)];
    }
  }
};
