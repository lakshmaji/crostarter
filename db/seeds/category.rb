# frozen_string_literal: true

categories = %w[
  Art
  Autos
  Entertainment
  Food
  Music
  Game
  Photography
  Productivity
  Sports
  Technology
  Craft
  Publishing
  Fashion
  For\ Kids
  Robots
  Sci-Fi\ and\ Fantasy
]

categories.each do |category|
  Category.create(
    name: category,
    description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 4),
    icon_path_name: Faker::LoremFlickr.image(size: '50x60'),
  )
end
