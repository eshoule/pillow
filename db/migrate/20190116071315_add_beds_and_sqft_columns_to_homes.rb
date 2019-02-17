class AddBedsAndSqftColumnsToHomes < ActiveRecord::Migration[5.2]
  def change
    add_column :homes, :baths, :float, null: false
    add_column :homes, :sqft, :integer, null: false
  end
end
