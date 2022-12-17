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

categories.each { |category| Category.create(name: category) }
