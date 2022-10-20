Rails.application.routes.draw do
  root "home#index"
  get 'profile', to: "profile#index"

  resources :users, only: [:new, :create]
  resources :sessions, only: [:new, :create]
end
