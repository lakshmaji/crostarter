class Reward < ApplicationRecord
  belongs_to :project

  validates :title, presence: true
  validates :amount, presence: true
  validates :description, presence: true

end
