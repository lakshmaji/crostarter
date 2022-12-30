module Types
  class QueryType < Types::BaseObject
    description 'The query root of crostarter schema'

    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field,
          String,
          null: false,
          description: 'An example field added by the generator'
    def test_field
      'Hello World!'
    end

    field :category, CategoryType, 'Find category by id' do
      argument :id, Int
    end

    def category(id:)
      Category.find(id)
    end

    field :categories, [CategoryType], 'List all categories', null: false

    def categories
      Category.all
    end

    field :projects, [ProjectType], 'List all projects', null: false

    def projects
      Project.all
    end

    field :project, ProjectType, 'Find project by id' do
      argument :id, Int
    end

    def project(id:)
      Project.find(id)
    end
  end
end
