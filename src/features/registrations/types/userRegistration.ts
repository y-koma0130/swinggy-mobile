import { z } from 'zod';
import { screenNameSchema } from './screenName';
import { emailAddressSchema } from './emailAddress';
import { passwordSchema } from './password';

export const userRegistrationSchema = z.object({
  screenName: screenNameSchema,
  emailAddress: emailAddressSchema,
  password: passwordSchema,
  password2: z.string().nonempty(),
});

export type UserRegistration = z.infer<typeof userRegistrationSchema>;
