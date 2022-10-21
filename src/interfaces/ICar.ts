import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({ // FONTE: https://zod.dev/?id=extend
  doorsQty: z.number({
    required_error: 'Doors quantity is required',
    invalid_type_error: 'Doors quantity must be a number',
  }).int()
    .positive('Value must be an positive integer')
    .gte(2, { message: 'Value must be equal or greater than 2' })
    .lte(4, { message: 'Value must be equal or lesser than 4' }),

  seatsQty: z.number({
    required_error: 'Seats quantity is required',
    invalid_type_error: 'Seats quantity must be a number',
  })
    .gte(2, { message: 'Value must be equal or greater than 2' })
    .lte(7, { message: 'Value must be equal or lesser than 7' }),
});

type ICar = z.infer<typeof CarZodSchema>;

export { ICar, CarZodSchema };
