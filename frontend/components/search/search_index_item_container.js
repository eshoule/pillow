import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteSave, saveListing } from '../../actions/save_actions';
import { openModal } from '../../actions/modal_actions';
import SearchIndexItem from './search_index_item';

const mstp = (state, ownProps) => {
  let save;
  Object.values(state.entities.saves).forEach(el => {
    if (el.home_id === ownProps.listing.id) {
      save = el;
    }
  });

  return {
    currentUser: state.session.id,
    listing: ownProps.listing,
    saved: save ? true : false,
    saveId: save ? save.id : null,
  };
};

const mdtp = dispatch => ({
  openModal: (type) => dispatch(openModal(type)),
  saveListing: (listingId) => dispatch(saveListing(listingId)),
  deleteSave: (listingId) => dispatch(deleteSave(listingId))
});
  
export default withRouter(connect(mstp, mdtp)(SearchIndexItem));