require "sidekiq/web"

Rails.application.routes.draw do
  authenticate :user, lambda { |u| u.admin? } do
    mount Sidekiq::Web => "/sidekiq"
  end

  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }
  root to: "home#index"
  namespace :api do
    namespace :v1 do
      resources :exams do
        member do
          get :redirect
          get :callback
          post :schedule
        end
        resources :questions
        resources :attempts
      end
    end
  end
end
