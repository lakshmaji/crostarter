# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Project, type: :model do
  describe 'validation' do
    subject(:project) do
      user = User.create(
        username: 'minion',
        password: 'donottellanyone',
      )
      category = Category.create(name: 'IoT')
      described_class.new(
        title: 'Bubbla',
        website: 'bubbla.io',
        description: 'Social networking application',
        end_date: Date.tomorrow,
        funding_goal: 130.26,
        details: 'none as of now',
        creator: user,
        category:,
      )
    end

    it 'is valid with valid attributes' do
      expect(project).to be_valid
    end

    it 'is not valid with no title' do
      project.title = nil
      expect(project).not_to be_valid
    end

    it 'is not valid with no end date' do
      project.end_date = nil
      expect(project).not_to be_valid
    end

    it 'is not valid with no funding goal amount' do
      project.funding_goal = nil
      expect(project).not_to be_valid
    end

    it 'is not valid with no creator' do
      project.creator = nil
      expect(project).not_to be_valid
    end

    it 'is not valid with no creator id' do
      project.creator_id = nil
      expect(project).not_to be_valid
    end

    it 'is not valid with no category' do
      project.category = nil
      expect(project).not_to be_valid
    end

    it 'is not valid with no category id' do
      project.category_id = nil
      expect(project).not_to be_valid
    end

    it 'is not valid with invalid funding goal data type' do
      project.funding_goal = 'twenty'
      expect(project).not_to be_valid
    end

    it 'is valid with funding goal as string' do
      project.funding_goal = '20'
      expect(project).to be_valid
    end

    it 'is not valid with a shorter title (less than 2 characters long)' do
      project.title = 'I'
      expect(project).not_to be_valid
    end
  end

  describe 'Associations' do
    it { is_expected.to belong_to(:creator) }
    it { is_expected.to belong_to(:category) }
    it { is_expected.to have_one_attached(:avatar) }
  end
end
