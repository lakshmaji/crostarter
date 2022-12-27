# frozen_string_literal: true

class ContributionsController < ApplicationController
  def create
    contribution = Contribution.new(contribution_params)
    contribution.backer = current_user

    if contribution.save
      redirect_to(project_path(params[:project_id]), notice: 'Contribution saved.')
    else
      flash[:alert] = 'Unable to save contribution'
      redirect_to(new_session_path)
    end
  end

  private

  def contribution_params
    params.require(:contribution).permit(:reward_id, :amount)
  end
end
