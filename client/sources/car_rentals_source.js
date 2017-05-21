import { axiosFactory } from '../utils/axios';

const carRentalsSource = axiosFactory('/api/v1/car_rentals');

export function searchCarRentals() {
  return carRentalsSource.get('/', {
    params: {
      pickUpTime: '1030AM',
      pickUpDate: '05/28/2017',
      pickUpSearch: 'Atlanta, GA',
      dropOffTime: '1030AM',
      dropOffDate: '06/03/2017',
      dropOffSearch: 'Atlanta, GA'
    }
  });
}
