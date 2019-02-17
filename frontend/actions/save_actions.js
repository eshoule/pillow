import * as APIUtil from '../util/save_api_util';
export const RECEIVE_SAVE = 'RECEIVE_SAVE';
export const RECEIVE_SAVES = 'RECEIVE_SAVES';
export const REMOVE_SAVE = 'REMOVE_SAVE';

export const receiveSave = save => ({
  type: RECEIVE_SAVE,
  save
});

export const receiveSaves = saves => ({
    type: RECEIVE_SAVES,
    saves
  });

export const removeSave = save => ({
type: REMOVE_SAVE,
save
});


export const fetchSaves = save => dispatch => (
    APIUtil.fetchSaves(save)
      .then(save => dispatch(receiveSaves(save)))
);

export const saveListing = save => dispatch => (
    APIUtil.saveListing(save)
      .then(save => dispatch(receiveSave(save)))
);

export const deleteSave = save => dispatch => (
    APIUtil.deleteSave(save)
      .then(save => dispatch(removeSave(save)))
);