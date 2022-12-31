# frozen_string_literal: true

module Types
  class CategoryType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :description, String
    field :icon_path_name, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :projects, [Types::ProjectType], null: true
    field :projects_count, Integer, 'No of projects', null: true

    # Typical rails method returning the count
    # of total projects for each category
    def projects_count
      object.projects.size
      # 10
    end
  end
end
