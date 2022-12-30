# frozen_string_literal: true

# Allow max 5 requests
# In period of 60 seconds
Rack::Attack.throttle('requests by ip', limit: 5, period: 60.seconds, &:ip)

# Throttle login attempts for a given username(email) parameter to 10 reqs/minute
# Return the *normalized* username as a discriminator on POST /login requests
Rack::Attack.throttle('limit logins per username', limit: 10, period: 60.seconds) do |req|
  if req.path == '/session/new' && req.post?
    # Normalize the username, using the same logic as your authentication process, to
    # protect against rate limit bypasses.
    req.params['username'].to_s.downcase.gsub(/\s+/, '')
  end
end

Rack::Attack.throttled_responder = lambda do |_request|
  # Using 503 because it may make attacker think that they have successfully
  # DOSed the site. Rack::Attack returns 429 for throttling by default
  [503, {}, ["This application run on free shared instance, show some love 🥹 \n"]]
end

# Provided that trusted users use an HTTP request header named APIKey
Rack::Attack.safelist('mark any authenticated access safe') do |request|
  # Requests are allowed if the return value is truthy
  request.env['HTTP_CI_API_KEY'] == Rails.application.credentials.dig(:ci, :throttle_key)
end
