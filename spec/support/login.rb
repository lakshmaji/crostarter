# frozen_string_literal: true

require 'securerandom'

module UserLoginSpecHelpers
  include BCrypt

  def sign_in
    user = { username: 'minion', password: Password.create(SecureRandom.hex) }
    User.create(user)
    post sessions_path,
         params: {
           user:,
         }
  end
end

RSpec.configure do |config|
  config.include UserLoginSpecHelpers, type: :request
end
