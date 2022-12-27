# frozen_string_literal: true

# Usage: bin/rails db:recreate:seed
# Source: https://edgeguides.rubyonrails.org/command_line.html#custom-rake-tasks
namespace :db do
  namespace :recreate do
    desc 'Drop and re-create database with seeds'
    task seed: ['db:drop', 'db:create', 'db:migrate', 'db:seed'] do
      puts '🌱 Done!'
    end
  end
end
