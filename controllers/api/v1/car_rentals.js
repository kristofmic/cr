import express from 'express';

import { responseHelper } from '../../../lib/helpers';
import { orbitz } from '../../../lib/sources';

const router = new express.Router();

router.get('/', getCars);

function getCars(req, res) {
  const pickUpCriteria = {
    time: req.query.pickUpTime,
    date: req.query.pickUpDate,
    search: req.query.pickUpSearch
  };
  const dropOffCriteria = {
    time: req.query.dropOffTime,
    date: req.query.dropOffDate,
    search: req.query.dropOffSearch
  };

  orbitz.getCarRentals(pickUpCriteria, dropOffCriteria)
    .then(data => JSON.parse(data))
    .then(responseHelper.handleSuccess(res))
    .catch(responseHelper.handleError(res));
}

export default router;
