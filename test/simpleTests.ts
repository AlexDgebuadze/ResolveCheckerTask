import { expect } from 'chai';
import promiseAllWithThreshold from '../app/code';


describe('Basic tests for checking function', async () => { 

    const promisesArr = [
      Promise.resolve('res'),
      Promise.reject('rej'),
      Promise.reject('rej'),
      Promise.resolve('res'),
      Promise.resolve('res')
    ];
        

    it('check if promise is resolve when threshold : 3', async () => {
        const result = await promiseAllWithThreshold(promisesArr, 3);
        expect(result).to.be.equal("promise was resolved");
    })

    it('check if promise is resolve when threshold : 2', async () => {
        const result = await promiseAllWithThreshold(promisesArr, 2)
        expect(result).to.be.equal("promise was resolved");
    })

    it('check if promise is rejected when threshold : 1', async () => {
        const result = await promiseAllWithThreshold(promisesArr, 1);
        expect(result).to.be.undefined;
    })

})