# frozen_string_literal: true

class Reward < ApplicationRecord
  belongs_to :project, inverse_of: :rewards

  has_many :contributions
  has_many :backers, through: :contributions, source: :backer

  validates :title, presence: true
  validates :amount, presence: true
  validates :description, presence: true, length: { in: 5..100 }
end
