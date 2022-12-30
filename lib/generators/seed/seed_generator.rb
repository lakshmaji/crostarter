class SeedGenerator < Rails::Generators::Base
  source_root File.expand_path('templates', __dir__)
  def create_seed_file
    create_file('db/seeds/dummy.rb', '# Add initiali contst here')
  end
end
