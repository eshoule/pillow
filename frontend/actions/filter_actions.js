export const UPDATE_FILTER = 'UPDATE_FILTER';
export const FILTER_SAVES = 'FILTER_SAVES';

export const updateFilter = filter => {
  return {
    type: UPDATE_FILTER,
    filter
  };
};

export const filterSaves = () => {
  return {
    type: FILTER_SAVES
  }
}