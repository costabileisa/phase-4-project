class DogsController < ApplicationController

  def index
    render json: Dog.all
  end

  def show
    dog = Dog.find(params[:id])
    render json: dog
  end

  def create
    str = ""
    9.times do
      str += rand(65...90).chr 
    end

    byebug

    new_dog = dog_params.merge!(dogid: str)

    byebug
    dog = Dog.create!(new_dog)

    if dog.valid?
      render json: dog, status: :created
    else
      render json: { errors: dog.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    dog = Dog.find(params[:id])
    if dog.update(dog_params)
      render json: dog
    else
      render json: { errors: dog.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    dog = Dog.find(params[:id])
    dog.destroy
    head :no_content
  end

  private

  def dog_params
    params.require(:dog).permit(:url)
  end
end
