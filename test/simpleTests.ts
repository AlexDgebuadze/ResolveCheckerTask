import { app } from "../app/code";
import { expect } from 'chai';


describe('Basic tests for checking function', async () => { 

    const promisesArr = [
      Promise.resolve('res'),
      Promise.reject('rej'),
      Promise.reject('rej'),
      Promise.resolve('res'),
      Promise.resolve('res')
    ];
        

    it('check if promise is resolve when threshold : 3', async () => {
        await app.promiseAllWithThreshold(promisesArr, 3)
        .then((result) => {
            expect(result).to.be.equal("promise was resolved");
        })
    })

    it('check if promise is resolve when threshold : 2', async () => {
        await app.promiseAllWithThreshold(promisesArr, 2)
        .then((result) => {
            expect(result).to.be.equal("promise was resolved");
        });
    })

    it('check if promise is rejected when threshold : 1', async () => {
        await app.promiseAllWithThreshold(promisesArr, 1)
        .catch((result) => {
            expect(result).to.be.equal("promise was rejected");
        });
    })

})