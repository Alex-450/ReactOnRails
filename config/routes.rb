Rails.application.routes.draw do
  root 'site#home'
  
  namespace :api do 
    namespace :v1 do 
     resources :slogan_submissions, only: [:create]
     resources :riders, only: [:index]
    end 
  end 
  match '*path', to: 'site#home', via: :all
end
