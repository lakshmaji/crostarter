# frozen_string_literal: true

def redis_url
  ENV.fetch('REDIS_URL') { Rails.application.credentials.config[:REDIS_URL] }
end

Sidekiq.configure_server do |config|
  config.redis = {
    url: redis_url.to_s,
    protocol: 2,
  }
end

Sidekiq.configure_client do |config|
  config.redis = {
    url: redis_url.to_s,
    protocol: 2,
  }
end
