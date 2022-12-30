# frozen_string_literal: true

users = %w[
  Gru
  Dru
  Minion
  Kevin
  Stuart
  Bob
]

users.each { |user| User.create(username: user, password: '123456') }
