class StaticController < ActionController::Base
  def cookie_policy
    render('cookie_policy')
  end
end
