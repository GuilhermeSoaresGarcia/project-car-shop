import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { allCarsMock, carMock, carMockWithId } from '../../mocks/carMocks';
import CarController from '../../../controllers/CarControllers';
import CarService from '../../../services/CarServices';
import CarModel from '../../../models/CarModel';


describe('Frame Controller', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  // fazemos o cast de um objeto para um `Request` pois nosso controller só vai aceitar um objeto do tipo `Request` como primeiro parâmetro
  const req = {} as Request;
  // o mesmo acontece com o segundo parâmetro
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'read').resolves(allCarsMock);
    sinon.stub(carService, 'readOne').resolves(carMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('método create', () => {
    it('happy route', async () => {
      req.body = carMock;
      await carController.create(req, res);
      // o cast de `res.status` é feito pois `res` foi criado como do tipo `Request` 
      // e agora, que queremos validar com o que foi chamado, precisar ser tratado como um `sinon.SinonStub`
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('método read', () => {
    it('happy route', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(allCarsMock)).to.be.true;
    });    
  });

  describe('método readOne', () => {
    it('happy route', async () => {
      // como fizemos o dublê da service o valor do `req.params.id` não vai chegar na model
      // logo ele só precisa ser um string e existir
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });    
  });
});