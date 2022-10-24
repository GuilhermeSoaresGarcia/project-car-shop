import { Router } from 'express';
import CarController from '../controllers/CarControllers';
import CarModel from '../models/CarModel';
import CarService from '../services/CarServices';

const route = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

route.get('/cars', (req, res) => carController.read(req, res));
route.post('/cars', (req, res) => carController.create(req, res));

export default route;