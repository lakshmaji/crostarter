# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :redirect_if_authenticated, only: [:new, :create]

  def new
    render(inertia: 'users/SignUp')
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to(new_session_path)
    else

      error_fields = user.errors.attribute_names
      errors = error_fields.map do |attribute|
        { attribute => user.errors.where(attribute).first.full_message }
      end.to_a

      redirect_to(new_user_path, inertia: { errors: })
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
