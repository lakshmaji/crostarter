# The Current class inherits from ActiveSupport::CurrentAttributes 
# which allows us to keep all per-request attributes easily available 
# to the whole system. In essence, this will allow us to set a current user 
# and have access to that user during each request to the server.
class Current < ActiveSupport::CurrentAttributes
    attribute :user
end