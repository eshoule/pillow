import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import SessionFormContainer from '../session/session_form_container';
import ListingContainer from '../listing/listing_container';

function Modal({ modal, closeModal }) {
  if (!modal) return null;

  let component; let klass; let klass2; let handleClick; let type;
  switch (modal) {
    case 'session-signup': case 'session-signin':
      klass = 'modal-background-session';
      klass2 = 'modal-child-session';
      type = modal === 'session-signup' ? "signup" : 'signin'
      component = <SessionFormContainer selected={type}/>;
      handleClick = closeModal;
      break;
    case 'showListing':
      klass = 'modal-background-listing';
      klass2 = 'modal-child-listing';
      component = <ListingContainer/>;
      handleClick = null;
      break;
    default:
      return null;
  }
  return (
    <div className={klass} onClick={handleClick}>
      <div className={klass2} onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mstp = (state) => ({
  modal: state.ui.modal,
});

const mdtp = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mstp, mdtp)(Modal);