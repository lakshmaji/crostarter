# frozen_string_literal: true

class CreateContributions < ActiveRecord::Migration[7.0]
  def change
    create_table :contributions do |t|
      t.belongs_to :reward, null: false, foreign_key: true
      t.belongs_to :backer, null: false, foreign_key: { to_table: :users }
      t.decimal :amount

      t.timestamps
    end
  end
end
