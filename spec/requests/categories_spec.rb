require 'rails_helper'

RSpec.describe CategoriesController, type: :request do
    describe 'GET /index' do
        it 'returns the categories page' do
            get categories_path
            expect(response).to have_http_status(200)
        end
    end
end