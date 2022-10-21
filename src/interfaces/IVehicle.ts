import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string({
    required_error: 'Model is required',
    invalid_type_error: 'Model must be a string',
  })
    .min(3, { message: 'Model must be 3 or more characters long' }),

  year: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a number',
  }).int()
    .positive('Value must be an positive integer')
    .gte(1900, { message: 'Year must be equal or greater than 1900' })
    .lte(2022, { message: 'Year must be equal or lesser than 2022' }),

  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  })
    .min(3, { message: 'Color must be 3 or more characters long' }),

  status: z.boolean().optional(),

  buyValue: z.number({
    required_error: 'Value is required',
    invalid_type_error: 'Value must be a number',
  }).int('Value must be an integer'),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { IVehicle, VehicleZodSchema };