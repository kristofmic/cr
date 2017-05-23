import { axiosFactory } from '../utils/axios';

const carRentalsSource = axiosFactory('/api/v1/car_rentals');

export function searchCarRentals() {
  const query = {
    pickUpTime: '1030AM',
    pickUpDate: '05/28/2017',
    pickUpSearch: 'Atlanta, GA',
    dropOffTime: '1030AM',
    dropOffDate: '06/03/2017',
    dropOffSearch: 'Atlanta, GA'
  };

  const queryString = Object.getOwnPropertyNames(query).reduce((qs, key) => (
    qs + (qs ? '&' : '') + `${key}=${encodeURIComponent(query[key])}`
  ), '');

  fetch(`/api/v1/car_rentals?${queryString}`, {
    method: 'GET',
    credentials: 'omit'
  })
    .then((response) => {
      const reader = response.body.getReader();
      pump(reader);
    });


  return Promise.resolve();

  // return carRentalsSource.get('/', {
  //   params: {
  //     pickUpTime: '1030AM',
  //     pickUpDate: '05/28/2017',
  //     pickUpSearch: 'Atlanta, GA',
  //     dropOffTime: '1030AM',
  //     dropOffDate: '06/03/2017',
  //     dropOffSearch: 'Atlanta, GA'
  //   }
  // });
}

function pump(reader) {
  const utf8Decoder = new window.TextDecoder('utf-8');

  reader.read().then(result => {
    if (result.done) {
      console.log('All done reading');
      return;
    }

    console.log('Chunk length: ', result.value.byteLength);
    console.log(utf8Decoder.decode(result.value));
    pump(reader);
  });
}