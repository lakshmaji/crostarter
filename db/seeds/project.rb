# frozen_string_literal: true

10.times do
  category = Category.all.sample
  creator = User.all.sample
  Project.create(
    title: Faker::Company.name,
    website: Faker::Internet.domain_name,
    description: Faker::Lorem.paragraph(sentence_count: 3),
    end_date: Faker::Date.between(from: 12.months.ago, to: 1.year.from_now),
    funding_goal: Faker::Commerce.price(range: 1000..10_000.0),
    details: Faker::Lorem.paragraph(sentence_count: 2),
    category:,
    creator:,
  )
end
