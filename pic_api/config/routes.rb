Rails.application.routes.draw do
  namespace :api do
    resources :programmers
  end
end
