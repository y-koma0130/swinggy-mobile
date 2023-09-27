import { z } from 'zod';
import { screenNameSchema } from './screenName';
import { emailAddressSchema } from './emailAddress';

export const userRegistrationSchema = z.object({
  screenName: screenNameSchema,
  emailAddress: emailAddressSchema,
});

export type UserRegistration = z.infer<typeof userRegistrationSchema>;
