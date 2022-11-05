require 'rails_helper'

RSpec.describe Category, type: :model do
    subject { described_class.new }
    it 'it valid with valid attributes' do
      expect(subject).to be_valid
    end

    it 'is not valid with no name' do
      expect(subject).to_not be_valid
    end
end
