# Preview all emails at http://localhost:3000/rails/mailers/welcome_user_mailer/welcome_email
class WelcomeUserMailerPreview < ActionMailer::Preview
  def welcome_email
    WelcomeUserMailer.with(user: User.first).welcome_email
  end
end
