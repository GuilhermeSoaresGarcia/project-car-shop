import IService from '../interfaces/IService';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

export default class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycle: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._motorcycle = model;
  }

  public async create(obj: unknown): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);

    if (!parsed.success) throw parsed.error;

    return this._motorcycle.create(parsed.data);
  }

  public async read(): Promise<IMotorcycle[]> {
    const result = await this._motorcycle.read();
    if (!result) throw new Error(ErrorTypes.EntityNotFound);
    return result;
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    const result = await this._motorcycle.readOne(_id);
    if (!result) throw new Error(ErrorTypes.EntityNotFound);
    return result;
  }

  public async update(_id: string, obj: IMotorcycle): Promise<IMotorcycle> {
    const result = await this._motorcycle.update(_id, obj);
    if (Object.keys(obj).length === 0) throw new Error(ErrorTypes.EmptyBody);
    if (!result) throw new Error(ErrorTypes.EntityNotFound);
    return result;
  }

  public async delete(_id: string): Promise<IMotorcycle> {
    const result = await this._motorcycle.delete(_id);
    if (!result) throw new Error(ErrorTypes.EntityNotFound);
    return result;
  }
}
