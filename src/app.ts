import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import carRoutes from './routes/CarsRoutes';
import motorcycleRoutes from './routes/MotorcyclesRoutes';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcycleRoutes);
app.use(errorHandler);

export default app;
