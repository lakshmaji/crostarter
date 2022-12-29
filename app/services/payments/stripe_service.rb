# frozen_string_literal: true

require 'stripe'

class StripeService
  def initialize
    Stripe.api_key = Rails.application.credentials.stripe[:publishable_key]
    # Stripe.api_key = Rails.application.credentials.dig(:stripe,:secret_key)
  end
end
