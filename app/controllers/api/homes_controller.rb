class Api::HomesController < ApplicationController

  def saved_homes
    @homes = current_user.saved_homes
    render 'api/homes/index.json.jbuilder'
  end 

  def index
    save_filters
    @homes = Home.with_attached_photos.where(
      "price >= ?
      AND price <= ?
      AND beds >= ?
      AND rental_type IN (?)
      AND listing_type IN (?)
      AND lat >= ?
      AND lat <= ?
      AND lng >= ?
      AND lng <= ?",
      min_price, max_price, beds, home_type, 
      listing_type, lat[0], lat[1], lng[0], lng[1]
    )
  end

  private
  def beds
    params[:beds][0].to_i
  end

  def min_price 
    price = params[:minPrice] 
    price == '' ? 0 : price.to_i * 1000
  end

  def max_price 
    price = params[:maxPrice]
    price == '' ? 10000000 : price.to_i * 1000
  end

  def home_type
    homes = params[:homeType] || DEFAULT_FILTERS[:homeType]
    home_ary = homes.map { |el| Home.homes[el.to_i] }
    home_ary.empty? ? Home.homes : home_ary
  end

  def listing_type 
    listings = params[:listingType] || DEFAULT_FILTERS[:listingType]
    listing_ary = listings.map { |el| Home.listings[el.to_i] }
    listing_ary.empty? ? Home.listings : listing_ary
  end

  def lat 
    minLat = params[:minLat]
    maxLat = params[:maxLat]
    [minLat, maxLat]
  end

  def lng 
    minLng = params[:minLng]
    maxLng = params[:maxLng]
    [minLng, maxLng]
  end

  def list 
    params[:listingType] ? 
      params[:listingType].map{ |el| el.to_i } : 
      DEFAULT_FILTERS[:listingType]
  end

  def home 
    params[:homeType] ? 
      params[:homeType].map{ |el| el.to_i } : 
      DEFAULT_FILTERS[:homeType]
  end


  def save_filters
    session[:filters] = {
      listingType: list,
      minPrice: params[:minPrice] || DEFAULT_FILTERS[:minPrice],
      maxPrice: params[:maxPrice] || DEFAULT_FILTERS[:maxPrice],
      beds: params[:beds] || DEFAULT_FILTERS[:beds],
      homeType: home,
      minLat: params[:minLat] || DEFAULT_FILTERS[:minLat],
      maxLat: params[:maxLat] || DEFAULT_FILTERS[:maxLat],
      minLng: params[:minLng] || DEFAULT_FILTERS[:minLng],
      maxLng: params[:maxLng] || DEFAULT_FILTERS[:maxLng],
      saved: params[:saved] || DEFAULT_FILTERS[:saved]
    }
  end
end