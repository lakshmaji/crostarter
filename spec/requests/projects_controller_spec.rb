# frozen_string_literal: true

require 'rails_helper'
require 'inertia_rails/rspec'

RSpec.describe ProjectsController, type: :request do
  describe 'GET /index', inertia: true do
    it 'returns the projects page' do
      get projects_path
      expect(response).to have_http_status(:ok)
    end

    it 'render correct react component' do
      get projects_path
      expect_inertia.to render_component 'projects/Projects'
    end

    it 'has a component name' do
      get projects_path
      expect(inertia.component).to eq 'projects/Projects'
    end

    it 'has a valid empty props' do
      get projects_path
      expect_inertia.to include_props({ projects: [], flash: { message: nil, alert: nil } })
    end
  end
end
