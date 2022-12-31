# frozen_string_literal: true

class WelcomeJob
  include Sidekiq::Job

  def perform(*args)
    WelcomeUserMailer.with(args).welcome_email.deliver
  end
end
