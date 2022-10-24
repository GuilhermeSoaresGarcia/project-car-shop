import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMocks';

describe('Car Model', () => {
  const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
		sinon.stub(Model, 'findOne').resolves(carMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('método create', () => {
		it('happy route', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMockWithId);
		});
	});

	describe('método readOne', () => {
		it('happy route', async () => {
			const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
			expect(carFound).to.be.deep.equal(carMockWithId);
		});

		it('error', async () => {
			try {
				await carModel.readOne('1234567890');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});