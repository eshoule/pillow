export const fetchListings = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/homes',
    data
  });
};

export const fetchSavedListings = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/saved_homes'
  });
};