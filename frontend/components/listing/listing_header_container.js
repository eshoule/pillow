import React from 'react';
import { connect } from 'react-redux';
import ListingHeader from './listing_header';
import { withRouter } from 'react-router-dom';
import { deleteSave, saveListing } from '../../actions/save_actions';
import { closeModal } from '../../actions/modal_actions';

const mstp = (state, ownProps) => {
  let save;
  Object.values(state.entities.saves).forEach(el => {
    if (el.home_id === ownProps.listing.id) {
      save = el;
    }
  });
  return ({
    saveId: save ? save.id : null,
    saved: save ? true : false
  });
};

const mdtp = dispatch => ({
  closeModal: (type) => dispatch(closeModal(type)),
  saveListing: (listingId) => dispatch(saveListing(listingId)),
  deleteSave: (listingId) => dispatch(deleteSave(listingId))
});

export default withRouter(connect(mstp, mdtp)(ListingHeader));