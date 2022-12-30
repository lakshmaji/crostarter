# frozen_string_literal: true

Sidekiq.configure_server do |config|
  config.redis = {
    url: Rails.application.credentials.config[:REDIS_URL] || 'localhost',
    password: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
  }
end

Sidekiq.configure_client do |config|
  config.redis = {
    url: Rails.application.credentials.config[:REDIS_URL] || 'localhost',
    password: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
  }
end
