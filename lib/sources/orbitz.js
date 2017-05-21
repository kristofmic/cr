import Bluebird from 'bluebird';
import request from 'request';

import { requestHelper } from '../helpers';

const ORBITZ_API = 'https://www.orbitz.com/carsearch/pickup/list/results';

export function getCarRentals(pickUpCriteria, dropOffCriteria) {
  return new Bluebird((resolve, reject) => {
    request.post({
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
    }, requestHelper.handleRequest(resolve, reject));
  });
}
