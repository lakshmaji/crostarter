# frozen_string_literal: true

Sidekiq.configure_server do |config|
  config.redis = {
    url: Rails.application.credentials.config[:REDIS_URL],
    protocol: 2,
  }
end

Sidekiq.configure_client do |config|
  config.redis = {
    url: Rails.application.credentials.config[:REDIS_URL],
    protocol: 2,
  }
end
