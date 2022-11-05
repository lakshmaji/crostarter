class Project < ApplicationRecord
  belongs_to :category
  belongs_to :creator, class_name: 'User'

  # could use bin/rails g model project avatar:attachment, when model is not generated
  has_one_attached :avatar 

  validates :title, presence: true
end
