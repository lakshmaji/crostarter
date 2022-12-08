# frozen_string_literal: true

class ErrorsController < ApplicationController
  def not_found
    handle_error
  end

  def internal_server_error
    handle_error
  end

  def unprocessable_entity
    handle_error
  end

  private

  def handle_error
    # Get the status code from the path, which is /500 or /404 etc.
    status = request.path_info.delete_prefix('/').to_i
    render(
      inertia: 'errors/Error',
      props: {
        status:,
      },
      # Uncomment below line if you want to respond with actual status
      # status:
    )
  end
end
