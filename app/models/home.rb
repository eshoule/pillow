require 'action_view'

class Home < ApplicationRecord
  include ActionView::Helpers::DateHelper

  HOMES = ['house','apartment','condo',
    'townhome', 'manufactured','lot'
  ].freeze

  LISTINGS = [
    "for sale","agent", "owner", "construction", "foreclosure",
    "coming soon", "potential listing", "forclosed", "pre-foreclosure",
    "make me move", "for rent", "recently sold"
  ].freeze

  validates :price, :rental_type, :beds, :rental, presence: true
  validates :street, :city, :state, :zip, :lat, :lng, presence: true

  has_many_attached :photos
  has_many :user_saves,
    foreign_key: :home_id,
    class_name: :Save
  
  belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User

  def self.homes 
    HOMES
  end

  def self.listings 
    LISTINGS
  end 

  def days
    time_ago_in_words(created_at)
  end
end
