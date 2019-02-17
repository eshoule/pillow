class AddColumnsHomeTable < ActiveRecord::Migration[5.2]
  def change
    add_column :homes, :year, :integer, null: false
    add_column :homes, :lot, :string, null: false
    add_column :homes, :heating, :string, null: false
    add_column :homes, :parking, :string, null: false
    add_column :homes, :cooling, :string, null: false
    add_column :homes, :description, :string, null: false
  end
end
