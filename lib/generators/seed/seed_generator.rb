# frozen_string_literal: true

class SeedGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('templates', __dir__)
  def generate_seed
    generate_seed_file
  end

  private

  def generate_seed_file
    destination_root = db_seed_path
    destination = "#{name}_seed.rb"
    destination = File.expand_path(destination, destination_root)
    seed_dir = File.dirname(destination)
    seed_number = next_seed_number(seed_dir)
    dir, base = File.split(destination)
    numbered_destination = File.join(dir, [seed_number, base].join('_'))
    template('seed.rb', numbered_destination)
  end

  def next_seed_number(dirname)
    number = current_seed_number(dirname) + 1
    [Time.now.utc.strftime('%Y%m%d%H%M%S'), '%.14d' % number].max
  end

  def seed_lookup_at(dirname)
    Dir.glob("#{dirname}/[0-9]*_*.rb")
  end

  def current_seed_number(dirname)
    seed_lookup_at(dirname).collect do |file|
      File.basename(file).split('_').first.to_i
    end.max.to_i
  end

  def db_seed_path
    'db/seeds'
  end
end
