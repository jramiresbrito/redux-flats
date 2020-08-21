export const SET_FLATS = 'SET_FLATS';
export const SELECT_FLAT = 'SELECT_FLAT';
// import flats from '../flats';

export function setFlats() {
  // return {
  //   type: 'SET_FLATS',
  //   payload: flats
  // };

  const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: SET_FLATS,
    payload: promise,
  };
}

export function selectFlat(flat) {
  return {
    type: SELECT_FLAT,
    payload: flat,
  };
}
