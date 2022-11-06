# frozen_string_literal: true

class SessionsController < ApplicationController
  before_action :redirect_if_authenticated, only: [:new, :create]

  def new
    render(inertia: 'users/SignIn')
  end

  def create
    user = User.find_by(username: params[:user][:username])
    if user
      # We're able to call user.authenticate because of has_secure_password
      if user.authenticate(params[:user][:password])
        # login from `Authenticate` concern
        login(user)
        redirect_to(root_path, notice: 'signed in')
      else
        flash[:alert] = 'incorrect email or password'
        redirect_to(new_session_path, inertia: { errors: 'Invalid credentials' })
      end
    else
      flash[:alert] = 'incorrect email or password'
      redirect_to(new_session_path, inertia: { errors: 'Invalid credentials' })
    end
  end

  def destroy
    logout
    redirect_to(root_path)
  end
end
