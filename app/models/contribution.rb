# frozen_string_literal: true

class Contribution < ApplicationRecord
  belongs_to :reward
  belongs_to :backer, class_name: 'User'

  validates :amount, presence: true
end
