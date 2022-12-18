# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'home#index'

  get 'profile', to: 'profile#index'

  resources :users, only: [:new, :create]
  resources :sessions, only: [:new, :create]
  get 'exit', to: 'sessions#destroy', as: :logout
  resources :categories, only: :index
  resources :projects, only: [:index, :show, :new, :create, :destroy]
  get 'myprojects', to: 'projects#myprojects', shallow: true

  if Rails.env.production?
    match '/404', to: 'errors#not_found', via: :all
    match '/500', to: 'errors#internal_server_error', via: :all
    match '/422', to: 'errors#unprocessable_entity', via: :all
  end
end
