class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true
  helper_method :current_user, :logged_in?, :get_filters

  DEFAULT_FILTERS = {
    listingType: [0,1,2,3,4,5,6,7,8,9],
    minPrice: '',
    maxPrice: '',
    beds: '0+',
    homeType: [0,1,2,3,4,5],
    minLat: -90,
    maxLat: 90,
    minLng: -180,
    maxLng: 180,
  }

  def get_filters
    if session[:filters]
      DEFAULT_FILTERS.each do |k, v|
        if !session[:filters][k.to_s]
          session[:filters][k.to_s] = v
        end
      end
    else 
      session[:filters] = DEFAULT_FILTERS
    end
    session[:filters]["saved"] = false
    session[:filters]
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    session[:filters] = nil
    @current_user = nil
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end
end