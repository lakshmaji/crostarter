class ApplicationController < ActionController::Base
  include Authentication

  include InertiaFlash

  inertia_share app_name: Rails.env['app.name']

  # Lazily
  inertia_share do
    if user_signed_in?
      {
        'auth': { user: { id: current_user.id } },
      }
    end
  end
end
