# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'lakshmaji@milknmore.org'
  layout 'mailer'
end
