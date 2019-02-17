class CreateListingTypeColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :homes, :listing_type, :string, null: false
  end
end
