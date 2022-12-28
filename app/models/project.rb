# frozen_string_literal: true

class Project < ApplicationRecord
  belongs_to :category
  belongs_to :creator, class_name: 'User'

  # could use bin/rails g model project avatar:attachment, when model is not generated
  has_one_attached :avatar

  has_many :rewards, inverse_of: :project
  has_many :contributions, through: :rewards, source: :contributions

  validates :title, presence: true, length: { minimum: 2 }
  validates :end_date, presence: true
  validates :funding_goal, presence: true, numericality: true
  validates :avatar, attached: true, content_type: [:png, :jpg, :jpeg]

  accepts_nested_attributes_for :rewards, allow_destroy: true

  scope :with_category, ->(id) { where('category_id = ?', id) if id.present? }

  def avatar_url
    avatar.url if avatar.attached?
  end

  def funded
    rewards.map(&:total_contributions).reduce(:+)
  end

  def total_backers_count
    rewards.map(&:contribution_count).reduce(:+)
  end
end
