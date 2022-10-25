import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const VALUES = ['Street', 'Custom', 'Trail'] as const;

const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.enum(VALUES), // FONTE: https://github.com/colinhacks/zod#zod-enums
  engineCapacity: z.number({
    required_error: 'Seats quantity is required',
    invalid_type_error: 'Seats quantity must be a number',
  }).int()
    .positive('Value must be an positive integer')
    .lte(2500, { message: 'Value must be equal or lesser than 2500' }),
});

type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;

export { IMotorcycle, MotorcycleZodSchema };
