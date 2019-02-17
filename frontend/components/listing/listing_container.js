import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Listing from './listing';
import { closeModal } from '../../actions/modal_actions';

const mstp = (state, ownProps) => {
  const listingId = ownProps.history.location.pathname.split("/");
  return {
    listing: state.entities.listings[listingId[listingId.length - 1]]
  };
};

const mdtp = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mstp, mdtp)(Listing));