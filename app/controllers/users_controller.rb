class UsersController < ApplicationController
    def new
        render inertia: 'users/SignUp'
    end
end