import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

export default abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    return this._model.find({});
  }

  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findOne({ _id });
  }

  public async update(_id: string, obj: any): Promise<T | null> { // como utilizar o tipo correto?
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndUpdate({ _id }, { ...obj }) as unknown as T;   
  }

  public async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.deleteOne({ _id }) as unknown as T;
  }
}
