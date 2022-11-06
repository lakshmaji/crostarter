# frozen_string_literal: true

class CreateRewards < ActiveRecord::Migration[7.0]
  def change
    create_table :rewards do |t|
      t.decimal :amount
      t.string :title
      t.text :description
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
