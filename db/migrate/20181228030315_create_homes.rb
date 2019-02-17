class CreateHomes < ActiveRecord::Migration[5.2]
  def change
    create_table :homes do |t|
      t.integer :price, null: false
      t.integer :seller_id, null: false
      t.string :type, null: false
      t.integer :beds, null: false
      t.string :rental, null: false, default: false
      t.timestamps
    end
  end
end
