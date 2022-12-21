class ContributionsController < ApplicationController
  def create
    contribution = Contribution.new(contribution_params)
    # TODO: bring user_id from session
    if contribution.save
      redirect_to(project_path(params[:project_id]), notice: 'Contribution saved.')
    else
      flash[:alert] = 'Unable to save contribution'
      redirect_to(new_session_path)
    end
  end

  private

  def contribution_params
    params.require(:contribution).permit(:reward_id, :user_id, :amount)
  end
end
