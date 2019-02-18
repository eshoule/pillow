require_relative "seed_data"
require 'open-uri';

User.destroy_all
Home.destroy_all

#Create Demo User
demo = User.create({
  email: 'demo@demo.com',
  password: 'password'
})

# Create 20 users
users = [demo]
10.times do |i|
  email = Faker::Internet.email
  password = Faker::Internet.password(8)
  user = User.create({
    email: email,
    password: password
  })
  users << user
end

# Create 10 rental properties for each user
count = 0
users.each_with_index do |user, idx|
  10.times do |_|

    # Randomly sample from existing data
    year = (1895..2017).to_a.sample
    lot = 'No Data'
    heating = ['Stove','Forced air','Other',
               'No Data','Baseboard'].sample
    parking = ['2 spaces', '1 space', 'No Data', 'No parking',
               'Carport','Attached Garage'].sample
    cooling = ['Evaporative','Central','Other','No Data','None',].sample

    price = (50000..1000000).to_a.sample
    home_type = HOMES.sample
    beds = [1, 2, 3, 4, 5, 6].sample
    baths = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5].sample
    sqft = (200..8000).to_a.sample
    rental = [true, false].sample
    address = ADDRESSES[count]
    listing_type = LISTINGS.sample
    description = Faker::Lorem.paragraphs(2)
    

    # Set property's attributes
    structure_photo = [PHOTOS[:structure].sample]
    bed_photos = beds.ceil.times.map { PHOTOS[:bed].sample }
    bath_photos = baths.ceil.times.map { PHOTOS[:bath].sample }
    outside_photos = 2.times.map { PHOTOS[:outside].sample }
    inside_photos = 3.times.map { PHOTOS[:inside].sample }
    kitchen_photos = 2.times.map { PHOTOS[:kitchen].sample }

    images = structure_photo + bed_photos + bath_photos +
      outside_photos + inside_photos + kitchen_photos

    # Create property
    home = Home.create({
      price: price, seller_id: user.id,
      rental_type: home_type, beds: beds, rental: rental,
      street: address[:street], city: address[:city],
      state: 'CA', zip: address[:zip], lat: address[:lat],
      lng: address[:lng], baths: baths, sqft: sqft,
      listing_type: listing_type, year: year, lot: lot,
      heating: heating, parking: parking, cooling: cooling,
      description: description
    })

    # Add images to property
    images.each do |img|
      file = open(img)
      name = img.split("/")[0]
      home.photos.attach(io: file, filename: name)
      home.save!
    end

    count += 1
  end
end