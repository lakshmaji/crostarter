# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token
  end
end
