# frozen_string_literal: true

Rack::Attack.throttle('requests by ip', limit: 50, period: 2.minutes, &:ip)

# Throttle login attempts for a given username(email) parameter to 10 reqs/minute
# Return the *normalized* username as a discriminator on POST /login requests
Rack::Attack.throttle('limit logins per username', limit: 10, period: 60.seconds) do |req|
  if req.path == '/session/new' && req.post?
    # Normalize the username, using the same logic as your authentication process, to
    # protect against rate limit bypasses.
    req.params['username'].to_s.downcase.gsub(/\s+/, '')
  end
end
