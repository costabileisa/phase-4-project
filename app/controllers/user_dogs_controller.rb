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
    user_dog.destroy

    head :no_content
  end

end
