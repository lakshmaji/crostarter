class Project < ApplicationRecord
  belongs_to :category
  belongs_to :creator
  has_one_attached :project_img
  has_one_attached :project_img
end
