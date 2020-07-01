Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get 'site/home'
  # root 'site#home'
  root 'site#home'

  # IMPORTANT #
  # This `match` must be the *last* route in routes.rb
  match '*path', to: 'site#home', via: :all
end
