import { ICar } from "../../interfaces/ICar";

const carMock: ICar = {
  model: 'Cabritinha',
  year: 2005,
  color: 'Dark blue',
  buyValue: 12000,
  doorsQty: 4,
  seatsQty: 3,
}

const allCarsMock: ICar[] = [
  {
  model: 'Cabritinha',
  year: 2005,
  color: 'Dark blue',
  buyValue: 12000,
  doorsQty: 4,
  seatsQty: 3,
},
{
  model: 'Versa do Dante',
  year: 2013,
  color: 'Black',
  buyValue: 27000,
  doorsQty: 6,
  seatsQty: 3,
},
{
  model: 'Siena do pai',
  year: 2006,
  color: 'Silver',
  buyValue: 14000,
  doorsQty: 6,
  seatsQty: 3,
},
]

const carMockWithId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Cabritinha',
  year: 2005,
  color: 'Dark blue',
  buyValue: 12000,
  doorsQty: 4,
  seatsQty: 3,
};

export { carMock, allCarsMock, carMockWithId };