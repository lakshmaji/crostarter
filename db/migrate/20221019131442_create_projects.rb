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
      t.belongs_to :creator, null: false, foreign_key: {to_table: :users}

      t.timestamps
    end
    add_index :projects, :title, unique: true
  end
end
