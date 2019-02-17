import merge from 'lodash/merge';
import { 
    RECEIVE_SAVE,
    REMOVE_SAVE,
    RECEIVE_SAVES 
} from '../actions/save_actions';

const savesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SAVE:
      const newSave = {[action.save.id]: action.save};
      return merge({}, state, newSave);
    case REMOVE_SAVE:
        const newState = merge({}, state)
        delete newState[action.save.id]
        return newState
    case RECEIVE_SAVES:
        return action.saves;
    default:
      return state;
  }
};

export default savesReducer;