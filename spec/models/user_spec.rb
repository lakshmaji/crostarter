require 'rails_helper'

RSpec.describe User, type: :model do
    context 'validations' do
        subject { described_class.new(username: "minion", password: "donottellanyone") }
        it 'is valid with valid attributes' do
            expect(subject).to be_valid
        end

        it 'is not valid with no username' do
            subject.username = nil
            expect(subject).to_not be_valid
        end

        it 'is not valid with no password' do
            subject.password = nil
            expect(subject).to_not be_valid
        end
    end
end