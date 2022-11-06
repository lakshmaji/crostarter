# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Reward, type: :model do
  describe 'validation' do
    subject(:reward) do
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
      described_class.new(
        amount: 12.10,
        title: 'As a token of appreciation',
        description: 'some description here',
        project:,
      )
    end

    it 'is valid with valid attributes' do
      expect(reward).to be_valid
    end

    it 'is not valid with no title' do
      reward.title = nil
      expect(reward).not_to be_valid
    end

    it 'is not valid with no amount' do
      reward.amount = nil
      expect(reward).not_to be_valid
    end

    it 'is not valid with no description' do
      reward.description = nil
      expect(reward).not_to be_valid
    end

    it 'is not valid with no project' do
      reward.project = nil
      expect(reward).not_to be_valid
    end

    it { is_expected.to validate_presence_of(:title) }

    it 'is not valid with less no of chars in description ' do
      reward.description = 'abcd'
      expect(reward).not_to be_valid
    end
  end

  describe 'Associations' do
    it { is_expected.to belong_to(:project) }
  end
end
