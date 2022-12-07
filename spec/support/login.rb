# frozen_string_literal: true

module UserLoginSpecHelpers
  def sign_in
    user = { username: 'minion', password: 'donottellanyone' }
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
