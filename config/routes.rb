Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  resources :profiles, only: [:create]
  resources :authors, only: [:index, :create]
  resources :genres, only: [:index, :create]
  resources :stories, only: [:index, :show, :create] do
    resources :paragraphs, only: [:index, :create, :update, :destroy]
  end
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/stories-by-author/:author_id", to: "stories#stories_by_author"
  get "/stories-by-genre/:genre_id", to: "stories#stories_by_genre"



  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
