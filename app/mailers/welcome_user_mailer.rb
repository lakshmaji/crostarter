class WelcomeUserMailer < ApplicationMailer
  def welcome_email
    @user = params[:user]
    @url  = 'https://crostarter.fly.dev/login'
    mail(to: @user.username, subject: 'Welcome to Crostarter')
  end
end
