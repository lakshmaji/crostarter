# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    categories = Category.limit(12)
    trending_projects = Project.includes(:category).last(3)

    # TODO: associate this to user activity
    recommended_projects = Project.includes(:category).limit(3)
    render(
      inertia: 'home/Home',
      props: {
        trending_projects: trending_projects
        .as_json(
          only: [
            :id,
            :title,
            :website,
            :description,
            :end_date, # ends at
            :funding_goal,
            :details,
            :category_id,
            :creator_id,
            :created_at, # started at
            :updated_at, # last seen
          ],
          include: { category: { only: :name } },
        ),
        recommended_projects: recommended_projects
        .as_json(
          only: [
            :id,
            :title,
            :website,
            :description,
            :end_date, # ends at
            :funding_goal,
            :details,
            :category_id,
            :creator_id,
            :created_at, # started at
            :updated_at, # last seen
          ],
          include: { category: { only: :name } },
        ),
        categories:,
      },
    )
  end
end
