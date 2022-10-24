import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    req: Request,
    res: Response<ICar>,
  ) {
    const { model, year,
      color, buyValue,
      doorsQty, seatsQty } = req.body;
    const car = {
      model,
      year,
      color,
      buyValue,
      doorsQty,
      seatsQty,
    };
    const results = await this._service.create(car);
    return res.status(201).json(results);
  }

  public async read(
    _req: Request,
    res: Response<ICar[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<ICar | null>,
  ) {
    const { id } = req.params;
    const result = await this._service.readOne(id);
    return res.status(200).json(result);
  }

  public async update(
    req: Request,
    res: Response<ICar | null>,
  ) {
    if (Object.keys(req.body).length === 0) { // verifica se o body está vazio
      return res.status(400).end();
    }
    const { id } = req.params;
    const result = await this._service.update(id, req.body);
    return res.status(200).json(result);
  }
}
