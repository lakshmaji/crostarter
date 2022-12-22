# frozen_string_literal: true

class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render(
      inertia: 'categories/Categories',
      props: {
        categories: categories.as_json(
          only: [:id, :name, :description, :icon_path_name],
        ),
      },
    )
  end
end
