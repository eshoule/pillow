import React from 'react';
import { connect } from 'react-redux';
import SearchResults from './search_results';
import { fetchListings, fetchSavedListings } from '../../actions/listing_actions';
import { fetchSaves } from '../../actions/save_actions';
import { updateFilter } from '../../actions/filter_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { shuffle } from '../../util/marker_util';

const mstp = (state) => ({
  listings: shuffle(Object.values(state.entities.listings)),
  filters: state.ui.filters,
  saves: state.entities.saves,
  currentUser: state.session.id
});

const mdtp = dispatch => ({
  fetchListings: (filters) => dispatch(fetchListings(filters)),
  fetchSavedListings: (filters) => dispatch(fetchSavedListings(filters)),
  fetchSaves: () => dispatch(fetchSaves()),
  saveListing: (listingId) => dispatch(saveListing(listingId)),
  deleteSave: (listingId) => dispatch(deleteSave(listingId)),
  updateFilter: (filter) => dispatch(updateFilter(filter)),
  openModal: (modal) => dispatch(openModal(modal)),
  shuffle: (listings) => shuffle(listings)
});

export default withRouter(connect(mstp, mdtp)(SearchResults));