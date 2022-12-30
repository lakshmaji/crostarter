# frozen_string_literal: true

class SeedGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('templates', __dir__)
  def copy_seed_file
    copy_file('seed.rb', "db/seeds/#{file_name}.rb")
  end
end
