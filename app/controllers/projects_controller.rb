# frozen_string_literal: true

class ProjectsController < ApplicationController
  def index
    pagy, paged_projects = pagy(
      Project.with_category(params[:category])
            .includes(:category),
    )

    categories = Category.all

    render(
      inertia: 'projects/Projects',
      props: {
        projects: paged_projects
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
        pagy: pagy_metadata(pagy),
        categories:,
        filters: params.slice(:category),
      },
    )
  end

  def show
    project = Project.includes(:category).find(params[:id])
    render(
      inertia: 'project/ProjectDetails',
      props: {
        project: project.as_json(
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

  def new
    categories = Category.all

    render(
      inertia: 'project/Newproject',
      props: {
        categories:,
      },
    )
  end

  def destroy
    project = Project.find(params[:id])

    if project.destroy
      redirect_to(myprojects_path, notice: 'Project deleted.')
    else
      redirect_to(myprojects_path(project), alert: 'Project cannot be deleted!')
    end
  end

  def create
    project = Project.new(project_params)
    project.creator = current_user
    project.category = Category.find(project.category_id)

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

  def myprojects
    projects = Project
      .includes(:category)
      .where(creator_id: current_user.id)

    render(
      inertia: 'users/projects/Projects',
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

  private

  def project_params
    params.require(:project).permit(
      :title,
      :website,
      :description,
      :end_date,
      :funding_goal,
      :details,
      :category_id,
      # TODO: add image
      rewards_attributes: [
        :title,
        :description,
        :amount,
      ],
    )
  end
end
