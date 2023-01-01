# frozen_string_literal: true

class WelcomeUserMailer < ApplicationMailer
  def welcome_email
    @user = params
    @url  = 'https://crostarter.fly.dev/login'

    mail(to: @user.username, subject: 'Welcome to Crostarter')
  end
end
