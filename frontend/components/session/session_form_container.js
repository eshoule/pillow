import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state, ownProps) => ({
    errors: state.errors.session,
    selected: ownProps.selected,
    button: ownProps.selected === 'signin' ? 'Sign in' : 'Submit'
});

const mdtp = dispatch => ({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp, mdtp)(SessionForm);