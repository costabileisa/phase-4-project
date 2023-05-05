class DogsController < ApplicationController
  before_action :authenticate_user, except: [:index]

  def index
    render json: Dog.all
  end

  # def show
  #   dog = Dog.find(params[:id])
  #   render json: dog
  # end

  def create
    dog = Dog.create!(dog_params)

    if dog.valid?
      render json: dog, status: :created
    else
      render json: { errors: dog.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # def update
  #   dog = Dog.find(params[:id])
  #   if dog.update(dog_params)
  #     render json: dog
  #   else
  #     render json: { errors: dog.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   dog = Dog.find(params[:id])
  #   dog.destroy
  #   head :no_content
  # end

  private

  def dog_params
    params.permit(:url)
  end

  def authenticate_user
    render json: { error: "Unauthorized" }, status: 401 unless session[:user_id]
  end
end
