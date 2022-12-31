# frozen_string_literal: true

# bin/rails graphql:schema:gen
namespace :graphql do
  namespace :schema do
    task gen: :environment do
      schema_defn = Rails7ReactBoilerplateSchema.to_definition
      schema_path = 'app/graphql/schema.graphql'
      File.write(Rails.root.join(schema_path), schema_defn)
      puts "Updated #{schema_path}"
    end
  end
end
