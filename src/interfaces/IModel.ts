export interface IModel<T> {
  create(obj: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(value: string): Promise<T | null>;
  update(value: string, obj: T): Promise<T | null>;
  delete(value: string): Promise<T | null>;
}
