# frozen_string_literal: true

module Mutations
  class CategoryCreate < BaseMutation
    description 'Creates a new category'

    field :category, Types::CategoryType, null: false

    argument :category_input, Types::CategoryInputType, required: true

    def resolve(category_input:)
      category = ::Category.new(**category_input)
      unless category.save
        raise GraphQL::ExecutionError.new(
          'Error creating category',
          extensions: category.errors.to_hash,
        )
      end

      { category: }
    end
  end
end
