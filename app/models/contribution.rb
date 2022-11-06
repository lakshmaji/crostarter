# frozen_string_literal: true

class Contribution < ApplicationRecord
  belongs_to :reward
  belongs_to :user

  validates :amount, presence: true
end
