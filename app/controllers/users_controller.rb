class UsersController < ApplicationController
  before_action :authenticate_user, only: [:create]

  def index
    render json: User.all, include: :dogs
  end

  def create
    user = User.create!(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    user = User.find(session[:user_id])
    if user
      render json: user, include: :dogs
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def update
    user = User.find(session[:user_id])
    user.update(
      username: params[:username],
      bio: params[:bio]
    )
    render json:user, status: :ok
  end

  def destroy
    user = User.find(session[:user_id])
    user.destroy

    head :no_content
  end
  

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

  def authenticate_user
    render json: { error: "Unauthorized" }, status: 401 unless current_user
  end
end
