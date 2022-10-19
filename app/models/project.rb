class Project < ApplicationRecord
  belongs_to :category
  belongs_to :creator

  # could use bin/rails g model project avatar:attachment, when model is not generated
  has_one_attached :avatar 
end
