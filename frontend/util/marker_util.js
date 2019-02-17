export const getListingsLatLon = (query) => {
    let newQuery = query.street.split(" ").join("+");

    $.ajax({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${newQuery}&key=AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U`
    }).then(res => {
      res.results[0].geometry.location.lat;
      res.results[0].geometry.location.lng;
    });
};

export const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};