class CategoriesController < ApplicationController
    def index
        categories = Category.all
        render inertia: 'categories/Categories', props: { 
            categories: categories
        }
    end
end