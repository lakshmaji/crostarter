require 'faker'

class ProfileController < ApplicationController
  def index
    render inertia: 'feature1/Profile', props: {
      name: Faker::Name.name
    }
  end
end
