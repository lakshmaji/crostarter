# The Authentication Concern provides an interface for logging the user in. 
# We load it into the ApplicationController so that it will be used across the whole application.
module Authentication
    extend ActiveSupport::Concern

    included do
        # call the before_action filter so that we have access to the current user before each request.
        before_action :current_user
        helper_method :current_user, :user_signed_in?
    end

    # The login method first resets the session to account for session fixation.
    #
    # We set the user's ID in the session so that we can have access to the user across requests. 
    # The user's ID won't be stored in plain text. The cookie data is cryptographically signed to make it tamper-proof. 
    # And it is also encrypted so anyone with access to it can't read its contents.
    def login(user)
        reset_session
        session[:current_user_id] = user.id
    end

    # The current_user method returns a User and sets it as the user on the Current class we created. 
    # We use memoization to avoid fetching the User each time we call the method.
    # 
    # Memoization link https://www.honeybadger.io/blog/ruby-rails-memoization/
    def current_user
        Current.user ||= session[:current_user_id] && User.find_by(id: session[:current_user_id])
    end

    def user_signed_in?
        Current.user.present?
    end

    def redirect_if_authenticated
        redirect_to root_path if user_signed_in? 
    end

    def logout
        reset_session
    end
end