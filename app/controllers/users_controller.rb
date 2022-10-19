class UsersController < ApplicationController
    def new
        render inertia: 'users/SignUp'
    end

    def create
        user = User.new(user_params)
        if user.save
            flash[:success] = "Account created, proceed to login ...."
            redirect_to root_path
        else

            error_fields = user.errors.attribute_names
            errors = error_fields.map { |attribute| { attribute => user.errors.where(attribute).first.full_message }   }.to_a

            redirect_to new_user_path, inertia: { errors: errors }
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end