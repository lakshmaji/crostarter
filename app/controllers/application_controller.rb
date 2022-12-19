# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include Authentication

  include InertiaFlash

  include InertiaCsrf

  include Pagy::Backend

  inertia_share app_name: Rails.env['app.name']

  # Lazily
  inertia_share do
    if user_signed_in?
      {
        'auth': { user: { id: current_user.id, name: current_user.username } },
      }
    end
  end
end
