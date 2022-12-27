# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Contribution, type: :model do
  describe 'validation' do
    subject(:contribution) do
      user = User.create(
        username: 'minion',
        password: 'donottellanyone',
      )
      category = Category.create(name: 'IoT')
      project = Project.new(
        title: 'Bubbla',
        website: 'bubbla.io',
        description: 'Social networking application',
        end_date: Date.tomorrow,
        funding_goal: 130.26,
        details: 'none as of now',
        creator: user,
        category:,
      )
      reward = Reward.new(
        amount: 12.10,
        title: 'As a token of appreciation',
        description: 'some description here',
        project:,
      )
      described_class.new(
        backer: user,
        reward:,
        amount: 10,
      )
    end

    it 'is valid with valid attributes' do
      expect(contribution).to be_valid
    end

    it 'is not valid with no reward' do
      contribution.reward = nil
      expect(contribution).not_to be_valid
    end

    it 'is not valid with no user' do
      contribution.backer = nil
      expect(contribution).not_to be_valid
    end
  end

  describe 'Associations' do
    it { is_expected.to belong_to(:backer) }
    it { is_expected.to belong_to(:reward) }
  end
end
