# frozen_string_literal: true

require 'faker'

class HomeController < ApplicationController
  def index
    render(
      inertia: 'home/Home',
      props: {
        name: Faker::Name.name,
      },
    )
  end
end
