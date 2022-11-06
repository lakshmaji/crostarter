# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Category, type: :model do
  subject(:category) { described_class.new(name: 'IoT') }

  it 'valid with valid attributes' do
    expect(category).to be_valid
  end

  it 'is not valid with no name' do
    category.name = nil
    expect(category).not_to be_valid
  end
end
