Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :homes, only: [:index]
    resources :saves, only: [:create, :index, :destroy]
    resource :session, only: [:create, :destroy]
    get 'saved_homes', :to => 'homes#saved_homes'
  end

  root "static_pages#root"
end
