require 'rails_helper'
require 'inertia_rails/rspec'

RSpec.describe CategoriesController, type: :request do
  describe 'GET /index', inertia: true do
    it 'returns the categories page' do
      get categories_path
      expect(response).to have_http_status(:ok)
    end

    it 'render correct react component' do
      get categories_path
      expect_inertia.to render_component 'categories/Categories'
    end

    it 'has a component name' do
      get categories_path
      expect(inertia.component).to eq 'categories/Categories'
    end

    it 'has a component name' do
      get categories_path
      expect_inertia.to include_props({ categories: [] })
    end
  end
end
