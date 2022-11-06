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
]

categories.each { |category| Category.create(name: category) }
