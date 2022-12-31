# frozen_string_literal: true

module Types
  class ProjectType < Types::BaseObject
    field :id, ID, null: false
    field :title, String
    field :website, String
    field :description, String
    field :end_date, GraphQL::Types::ISO8601Date
    field :funding_goal, Float
    field :details, String
    field :category, CategoryType, null: false
    field :creator_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
