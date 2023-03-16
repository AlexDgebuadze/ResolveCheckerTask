export default function promiseAllWithThreshold(arrayOfPromises: Promise<any>[], threshold: number) : Promise<any>{
      let rejCount = 0;
    
      return Promise.allSettled(arrayOfPromises)
        .then((settledPromises) => {
          settledPromises.forEach((res) => {
            if (res.status === 'rejected') {
              rejCount++;
            }
          });
    
          if (rejCount > threshold) {
            return Promise.reject("promise was rejected");
          } else {
            return Promise.resolve("promise was resolved");
          }
        }).catch(error => console.log(error.message));
}
       