Rails.application.routes.draw do
  namespace :api do
    resources :programmers, except: [:new, :edit]
  end
end
