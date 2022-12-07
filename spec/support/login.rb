# frozen_string_literal: true

require 'securerandom'

module UserLoginSpecHelpers
  include BCrypt

  def sign_in
    password = SecureRandom.hex
    password_escaped = password.sub(/.*/, '[redacted]')

    user = { username: 'minion', password: password_escaped }
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
