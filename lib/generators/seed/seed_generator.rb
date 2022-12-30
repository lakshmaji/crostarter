class SeedGenerator < Rails::Generators::Base
  def create_seed_file
    create_file('db/seeds/dummy.rb', '# Add initiali contst here')
  end
end
