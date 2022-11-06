# frozen_string_literal: true

FactoryBot.define do
  factory :creator, class: 'User' do
    username { 'Lakshmaji' }
    password { 'donottellanyone' }
  end
end
