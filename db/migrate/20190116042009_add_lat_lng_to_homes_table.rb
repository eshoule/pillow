class AddLatLngToHomesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :homes, :lat, :float, null: false
    add_column :homes, :lng, :float, null: false
  end
end
