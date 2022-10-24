import { ICar } from "../../interfaces/ICar";

const carMock:ICar = {
  model: 'Cabritinha',
  year: 2005,
  color: 'Dark blue',
  buyValue: 12000,
  doorsQty: 4,
  seatsQty: 3,
}  

const carMockWithId:ICar & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Cabritinha',
  year: 2005,
  color: 'Dark blue',
  buyValue: 12000,
  doorsQty: 4,
  seatsQty: 3,
};

export { carMock, carMockWithId };