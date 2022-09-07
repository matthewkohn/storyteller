Rails.application.routes.draw do
  resources :profiles
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  resources :profiles, only: [:create]
  # resources :profiles, only: [:index, :create, :update]
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
