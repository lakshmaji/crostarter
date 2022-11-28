# frozen_string_literal: true

class ProjectsController < ApplicationController
    def index
        projects = Project.all
        render(
            inertia: 'projects/Projects',
            props: {
                projects: projects.as_json(
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
                    ]
                )
            }
        )
    end
end