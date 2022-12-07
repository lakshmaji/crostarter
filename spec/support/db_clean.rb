# frozen_string_literal: true

# https://github.com/DatabaseCleaner/database_cleaner#test-framework-examples
RSpec.configure do |config|
  config.before(:suite) do
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
  end
end
