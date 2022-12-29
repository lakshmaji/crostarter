# frozen_string_literal: true

class StaticController < ApplicationController
  layout 'static_content'

  def cookie_policy
    render('cookie_policy')
  end
end
