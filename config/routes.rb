# frozen_string_literal: true

require 'sidekiq/web'

Rails.application.routes.draw do
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' if Rails.env.development?
  post '/graphql', to: 'graphql#execute'
  root to: 'home#index'

  get 'profile', to: 'profile#index'
  get 'cookie-policy', to: 'static#cookie_policy'

  resources :users, only: [:new, :create]
  resources :sessions, only: [:new, :create]
  get 'exit', to: 'sessions#destroy', as: :logout
  resources :categories, only: :index
  resources :projects, only: [:index, :show, :new, :create, :destroy, :edit, :update] do
    resources :contributions, only: [:create]
  end
  get 'myprojects', to: 'projects#myprojects', shallow: true

  if Rails.env.production?
    match '/404', to: 'errors#not_found', via: :all
    match '/500', to: 'errors#internal_server_error', via: :all
    match '/422', to: 'errors#unprocessable_entity', via: :all
  end

  # TODO: add protection
  mount Sidekiq::Web => '/queue/monitor'
end
