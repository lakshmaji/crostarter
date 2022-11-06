# frozen_string_literal: true

class Reward < ApplicationRecord
  belongs_to :project

  validates :title, presence: true
  validates :amount, presence: true
  validates :description, presence: true, length: { in: 5..100 }
end
