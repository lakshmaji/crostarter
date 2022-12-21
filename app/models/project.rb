# frozen_string_literal: true

class Project < ApplicationRecord
  belongs_to :category
  belongs_to :creator, class_name: 'User'

  # could use bin/rails g model project avatar:attachment, when model is not generated
  has_one_attached :avatar
  has_many :rewards, inverse_of: :project


  validates :title, presence: true, length: { minimum: 2 }
  validates :end_date, presence: true
  validates :funding_goal, presence: true, numericality: true

  accepts_nested_attributes_for :rewards
end
