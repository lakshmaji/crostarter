class Project < ApplicationRecord
  belongs_to :category
  belongs_to :creator
end
