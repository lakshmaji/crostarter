class SessionsController < ApplicationController
    def new
        render inertia: 'users/SignIn'
    end

    def create
    end
end