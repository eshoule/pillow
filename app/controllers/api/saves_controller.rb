class Api::SavesController < ApplicationController
  def create
    @save_home = Save.new(save_params)
    @save_home.user_id = current_user.id
    @save_home.save
    render "/api/saves/show"
  end

  def index 
    @saves = []
    if current_user
      @saves = current_user.saves
    end
  end

  def destroy
    @save_home = Save.find(params[:id])
    @save_home.destroy
    render "/api/saves/show"
  end

  def save_params
    params.require(:save).permit(:home_id)
  end
end