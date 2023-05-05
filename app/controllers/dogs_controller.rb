class DogsController < ApplicationController

  def index
    render json: Dog.all
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
