class UserDogsController < ApplicationController
  def create
    user = User.find(params[:user_id])
    dog = Dog.find(params[:dog_id])

    if user.dogs.include?(dog)
      render json: { errors: ["You've already favorited this dog! Please click on a different one."] }, status: :unprocessable_entity
    else
      user.dogs << dog
      render json: user.dogs, status: :created
    end
  end

  def destroy
    association = UserDog.find_by(user_id: session[:user_id])
    association.destroy

    head :no_content
  end

end
