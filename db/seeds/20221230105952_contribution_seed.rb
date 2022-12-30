# frozen_string_literal: true

no_of_contributions = 568
no_of_contributions = 10 if Rails.env.production?

no_of_contributions.times do
  reward = Reward.all.sample
  backer = User.all.sample

  Contribution.create(
    reward:,
    backer:,
    amount: Faker::Commerce.price(range: 0..reward.amount),
  )
end
