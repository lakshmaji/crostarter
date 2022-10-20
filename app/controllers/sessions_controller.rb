class SessionsController < ApplicationController
    def new
        render inertia: 'users/SignIn'
    end

    def create
        user = User.find_by(username: params[:user][:username])
        if user
            # We're able to call user.authenticate because of has_secure_password
            if user.authenticate(params[:user][:password])
                redirect_to root_path
            else
                redirect_to new_session_path, inertia: { errors: "Invalid credentials" }
            end
        else
            redirect_to new_session_path, inertia: { errors: "Invalid credentials" }
        end
    end
end