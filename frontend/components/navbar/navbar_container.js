import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout, clearErrors } from '../../actions/session_actions';
import { fetchSaves } from '../../actions/save_actions';
import { filterSaves, updateFilter } from '../../actions/filter_actions';
import { fetchListings } from '../../actions/listing_actions';
import NavBar from './navbar';

const mstp = (state) => ({
  currentUser: state.session.id,
  saves: Object.values(state.entities.saves).length,
  filters: state.ui.filters
});

const mdtp = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchSaves: () => dispatch(fetchSaves()),
  filterSaves: () => dispatch(filterSaves()),
  updateFilter: (filter) => dispatch(updateFilter(filter)),
  fetchListings: (filters) => dispatch(fetchListings(filters))
});

export default withRouter(connect(mstp, mdtp)(NavBar));