# frozen_string_literal: true

no_of_projects = 100
no_of_projects = 10 if Rails.env.production?

no_of_projects.times do
  category = Category.all.sample
  creator = User.all.sample
  file = File.open(Rails.root.join('db', 'seeds', 'project.jpeg'))

  title = Faker::Company.name
  funding_goal = Faker::Commerce.price(range: 1000..10_000.0)

  project = Project.new(
    title:,
    website: Faker::Internet.domain_name,
    description: Faker::Lorem.paragraph(sentence_count: 5),
    end_date: Faker::Date.between(from: 12.months.ago, to: 1.year.from_now),
    funding_goal:,
    details: Faker::Lorem.paragraph(sentence_count: 10),
    category:,
    creator:,
  )
  project.avatar.attach(
    io: file,
    filename: title.parameterize(separator: '_'),
    content_type: 'image/jpeg',
  )

  no_of_rewards = Faker::Number.rand_in_range(1, 6)

  rewards = Array.new(no_of_rewards).map do
    Reward.new(
      title: Faker::Games::Pokemon.name,
      description: Faker::Movie.quote,
      amount: Faker::Commerce.price(range: 1000.0..funding_goal),
      created_at: Faker::Time.between_dates(from: 2.years.ago, to: 2.months.ago),
    )
  end

  project.rewards = rewards

  project.save!
end
