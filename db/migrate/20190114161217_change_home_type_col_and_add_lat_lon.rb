class ChangeHomeTypeColAndAddLatLon < ActiveRecord::Migration[5.2]
  def change
    rename_column :homes, :type, :rental_type
    add_column :homes, :street, :string, null: false
    add_column :homes, :city, :string, null: false
    add_column :homes, :state, :string, null: false
    add_column :homes, :zip, :string, null: false
    add_index :homes, [:street, :city, :state, :zip], unique: true
  end
end
