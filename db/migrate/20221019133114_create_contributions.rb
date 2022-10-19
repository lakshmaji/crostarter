class CreateContributions < ActiveRecord::Migration[7.0]
  def change
    create_table :contributions do |t|
      t.belongs_to :reward, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.decimal :amount

      t.timestamps
    end
  end
end
