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
        project:,
      },
    )
  end

  def new
    categories = Category.all

    render(
      inertia: 'project/Newproject',
      props: {
        categories:,
      },
    )
  end

  def create
    project = Project.new(project_params)

    if project.save
      redirect_to(root_path)
    else
      error_fields = project.errors.attribute_names
      errors = error_fields.map do |attribute|
        { attribute => project.errors.where(attribute).first.full_message }
      end.to_a

      redirect_to(new_project_path, inertia: { errors: })
    end
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end
end
