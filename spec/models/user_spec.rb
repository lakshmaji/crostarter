# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    subject(:user) { described_class.new(username: 'minion', password: 'donottellanyone') }

    it 'is valid with valid attributes' do
      expect(user).to be_valid
    end

    it 'is not valid with no username' do
      user.username = nil
      expect(user).not_to be_valid
    end

    it 'is not valid with no password' do
      user.password = nil
      expect(user).not_to be_valid
    end
  end

  it 'does not allow duplicate username' do
    described_class.create(
      username: 'minion',
      password: 'donottellanyone',
    )

    other_user = described_class.new(
      username: 'minion',
      password: 'donottellanyone',
    )
    other_user.valid?
    expect(other_user.errors[:username]).to include('has already been taken')
  end
end
