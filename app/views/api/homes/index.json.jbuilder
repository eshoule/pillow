@homes.each do |home|
  json.set! home.id do
    json.extract! home, :id, :rental_type, :street, :beds,
                  :city, :state, :zip, :price, :lat, :lng, :days,
                  :baths, :sqft, :rental, :year, :lot, :heating,
                  :parking, :cooling, :description, :listing_type
    json.photoUrls home.photos.map { |file| url_for(file) }
  end
end