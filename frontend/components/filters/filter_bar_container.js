import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateFilter, filterSaves } from '../../actions/filter_actions';
import { 
  fetchListings, 
  fetchSavedListings 
} from '../../actions/listing_actions';
import FilterBar from './filter_bar';

const mstp = (state) => ({
  listings: state.entities.listings,
  filters: state.ui.filters,
  saves: Object.values(state.entities.saves),
  currentUser: state.session.id
});

const mdtp = dispatch => ({
  updateFilter: (filter) => dispatch(updateFilter(filter)),
  fetchListings: (filters) => dispatch(fetchListings(filters)),
  fetchSavedListings: () => dispatch(fetchSavedListings()),
  filterSaves: () => dispatch(filterSaves())
});

export default withRouter(connect(mstp, mdtp)(FilterBar));