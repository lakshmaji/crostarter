require 'rails_helper'

RSpec.describe Category, type: :model do
    it 'it valid with valid attributes' do
      expect(Category.new).to be_valid
    end
end
