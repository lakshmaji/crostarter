class ApplicationController < ActionController::Base
    include Authentication

    inertia_share app_name: Rails.env['app.name']


    # Lazily
    inertia_share do
        if user_signed_in?
        {
            'auth': {:user => {id: current_user.id }}
        }
        end
    end

    inertia_share flash: -> {
        {
            message: flash.notice,
            alert: flash.alert
        }
    }
  
end
