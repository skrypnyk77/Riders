export const SET_DATA = 'SET_DATA';

export function setData(payload) {
  return {
    type: SET_DATA,
    payload,
  };
}
