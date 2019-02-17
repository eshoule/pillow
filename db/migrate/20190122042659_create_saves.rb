class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.integer :home_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :saves, [:home_id, :user_id], unique: true
  end
end
