Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :dogs, only: [:index]
  resources :user_dogs, only: [:create, :destroy, :index]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
