class UserDogsController < ApplicationController
  before_action :authenticate_user, except: [:index]

  def create
    user = User.find(session[:user_id])
    dog = Dog.find(params[:dog_id])

    if user.dogs.include?(dog)
      render json: { errors: ["You've already favorited this dog! Please click on a different one."] }, status: :unprocessable_entity
    else
      data = UserDog.create!(user_dog_params)
      render json: data, status: :created
    end
  end

  def index
    tally = UserDog.group(:dog_id).count
    top_dogs = tally.sort_by { |dog_id, count| -count }.take(5).to_h
    render json: { user_dogs: UserDog.all, tally: tally, top_dogs: top_dogs }
  end

  def update
    user_dog = UserDog.find(params[:id])
    user_dog.update(name: params[:name])

    render json: user_dog, status: :ok
  end

  def destroy
    user_dog = UserDog.find(params[:id])
    if session[:user_id] = user_dog.user_id
      user_dog.destroy
    end
    head :no_content
  end

  private

  def user_dog_params
    params.permit(:name, :user_id, :dog_id)
  end

  def authenticate_user
    render json: { error: "Unauthorized" }, status: 401 unless session[:user_id]
  end
end
