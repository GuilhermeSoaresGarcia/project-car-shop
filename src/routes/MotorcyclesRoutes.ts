import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleControllers';
import MotorcycleModel from '../models/MotorcycleModel';
import MotorcycleService from '../services/MotorcycleServices';

const route = Router();

const motorcycles = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycles);
const motorcycleController = new MotorcycleController(motorcycleService);

const routeWithID = '/motorcycles/:id';

route.post('/motorcycles', (req, res) => motorcycleController.create(req, res));
route.get('/motorcycles', (req, res) => motorcycleController.read(req, res));
route.get(routeWithID, (req, res) => motorcycleController.readOne(req, res));
route.put(routeWithID, (req, res) => motorcycleController.update(req, res));
route.delete(routeWithID, (req, res) => motorcycleController.delete(req, res));

export default route;