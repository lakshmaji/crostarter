class UsersController < ApplicationController
    def new
        render inertia: 'users/SignUp'
    end

    def create
        user = User.new(user_params)
        if user.save
            redirect_to root_path
        else
            render json: { message: "TODO" }
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end