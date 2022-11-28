# frozen_string_literal: true

class ProjectsController < ApplicationController
  def index
    projects = Project
      .includes(:category)

    render(
      inertia: 'projects/Projects',
      props: {
        projects: projects
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
      },
    )
  end

  def show
    project = Project.find(params[:id])
    render(
      inertia: 'project/ProjectDetails',
      props: {
        project: project
      },
    )
   end
end
