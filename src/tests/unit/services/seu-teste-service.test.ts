import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarServices';
import { carMock, carMockWithId } from '../../mocks/carMocks';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'readOne')
      // na chamada de index 0 `carModel.readOne` vai responder um fakeCar
      .onCall(0).resolves(carMockWithId)
      // já na próxima chamada ele vai mudar seu retorno, isso pode ser feito várias vezes
      .onCall(1).resolves(null);
  })
  after(() => {
    sinon.restore()
  })

  describe('método create', () => {
    it('happy route', async () => {
      const carCreated = await carService.create(carMock);
      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it('error', async () => {
      let error;
      try {
        await carService.create({});
      } catch (err) {
        error = err
      }
      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('método readOne', () => {
    it('happy route', async () => {
      const carCreated = await carService.readOne(carMockWithId._id);
      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it('error', async () => {
      let error;
      try {
        // a mesma chamada que o teste acima aqui vai gerar o erro por causa do nosso sinon.stub(...).onCall(1)
        await carService.readOne(carMockWithId._id);
      } catch (err: any) {
        error = err
      }
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    });
  });
});