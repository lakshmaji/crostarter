# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'projects#index'

  get 'profile', to: 'profile#index'

  resources :users, only: [:new, :create]
  resources :sessions, only: [:new, :create]
  get 'exit', to: 'sessions#destroy', as: :logout
  resources :categories, only: :index
  resources :projects, only: [:index, :show]
end
