class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :website
      t.text :description
      t.date :end_date
      t.decimal :funding_goal
      t.text :details
      t.belongs_to :category, null: false, foreign_key: true
      t.integer :creator_id, null: false

      t.timestamps
    end
    add_index :projects, :title, unique: true
    add_index :projects, :creator_id
  end
end
