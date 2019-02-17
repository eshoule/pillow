import React from 'react';
import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { withRouter } from 'react-router-dom';
import { shuffle } from '../../util/marker_util';

const mstp = (state, ownProps) => ({
  listings: Object.values(state.entities.listings),
  saves: Object.values(state.entities.saves),
  saved: state.ui.filters.saved
});

const mdtp = dispatch => ({
  shuffle: (listings) => shuffle(listings)
});

export default withRouter(connect(mstp, mdtp)(SearchIndex));