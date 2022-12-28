# frozen_string_literal: true

class Reward < ApplicationRecord
  belongs_to :project, inverse_of: :rewards

  has_many :contributions
  has_many :backers, through: :contributions, source: :backer

  validates :title, presence: true
  validates :amount, presence: true
  validates :description, presence: true, length: { in: 5..100 }

  # Total amount contributed
  def total_contributions
    contributions.reduce(0) { |acc, cont| acc + cont.amount }
  end

  # Total members contributed
  def contribution_count
    contributions.map(&:backer_id).uniq.count
  end
end
