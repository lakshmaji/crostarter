# frozen_string_literal: true

require 'faker'

class ProfileController < ApplicationController
  def index
    render(
      inertia: 'users/profile/Profile',
      props: {
        name: Faker::Name.name,
      },
    )
  end
end
