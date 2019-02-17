import { UPDATE_FILTER, FILTER_SAVES } from '../actions/filter_actions';
import { merge } from 'lodash';

const _defaultFilters = Object.freeze({
  listingType: [],
  minPrice: '',
  maxPrice: '',
  beds: "0+",
  homeType: [],
  minLat: -90,
  maxLat: 90,
  minLng: -180,
  maxLng: 180,
  saved: false
});

const filtersReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    return Object.assign({}, state, action.filter);
  } else if (action.type === FILTER_SAVES) {
    let newState = state.saved ? false : true;
    return merge({}, state, { saved: newState });
  } else {
    return state;
  }
};

export default filtersReducer;
