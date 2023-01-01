# frozen_string_literal: true

class WelcomeJob
  include Sidekiq::Job

  def perform(user_id)
    user = User.find(user_id)
    WelcomeUserMailer.with(user).welcome_email.deliver
  end
end
