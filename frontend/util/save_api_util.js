export const saveListing = (listingId) => {
    return $.ajax({
      method: 'POST',
      url: 'api/saves',
      data: {save: {home_id: listingId}}
    });
};

export const fetchSaves = () => {
    return $.ajax({
      method: 'GET',
      url: 'api/saves'
    });
};
  
export const deleteSave = (saveId) => {
    return $.ajax({
      method: 'DELETE',
      url: `api/saves/${saveId}`
    });
};