class User < ApplicationRecord
  include ActiveModel::SecurePassword
  has_secure_password
  has_secure_password :recovery_password, validations: false

  validates :username, presence: true, uniqueness: true
end
