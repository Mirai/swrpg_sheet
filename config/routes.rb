Rails.application.routes.draw do
  namespace :api, defaults: {format: :json}, constraints: {format: :json} do
    resources :characters, except: [:new, :edit]
    resources :species, only: [:index]
  end

  resources :characters, only: [:index]
  get '/characters/*app', to: 'characters#index'

  root 'home#index'
end
