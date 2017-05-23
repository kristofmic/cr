import Bluebird from 'bluebird';
import request from 'request';
import { Transform } from 'stream';

import { requestHelper } from '../helpers';

const ORBITZ_API = 'https://www.orbitz.com/carsearch/pickup/list/results';

export function getCarRentals(pickUpCriteria, dropOffCriteria) {
  const getTransform = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString('utf-8').toUpperCase());
      callback();
    }
  });

  return request
    .post({
      url: ORBITZ_API,
      formData: {
        pickUpDate: pickUpCriteria.date,
        pickUpTime: pickUpCriteria.time,
        pickUpSearchTerm: pickUpCriteria.search,
        dropOffDate: dropOffCriteria.date,
        dropOffTime: dropOffCriteria.time,
        dropOffSearchTerm: dropOffCriteria.search,
        radiusDistance: 25
      }
    })
    .pipe(getTransform);
}
