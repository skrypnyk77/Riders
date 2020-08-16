import {SET_DATA} from '../actions';

const mainReducer = (state = {list: []}, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        list: state.list.concat(action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
