# frozen_string_literal: true

class Contribution < ApplicationRecord
  belongs_to :reward
  belongs_to :backer, class_name: 'User'

  validates :amount, presence: true

  # Total amount contributed
  def total_contributions
    contributions.reduce(0) { |acc, cont| acc + cont.amount }
  end

  # Total members contributed
  def contribution_count
    contributions.map(&:backer_id).uniq.count
  end
end
