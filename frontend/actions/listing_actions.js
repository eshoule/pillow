import * as APIUtil from '../util/listing_api_util';
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_SAVED_LISTINGS = 'RECEIVE_SAVED_LISTINGS';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const receiveSavedListings = listings => ({
  type: RECEIVE_SAVED_LISTINGS,
  listings
});

export const fetchListings = (filters) => dispatch => (
  APIUtil.fetchListings(filters)
    .then(listings => dispatch(receiveListings(listings)))
);

export const fetchSavedListings = () => dispatch => (
  APIUtil.fetchSavedListings()
    .then(listings => dispatch(receiveSavedListings(listings)))
);
