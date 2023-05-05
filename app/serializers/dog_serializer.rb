class DogSerializer < ActiveModel::Serializer
  attributes :id, :url, :dogid

  has_many :user_dogs
  has_many :users, through: :user_dogs
end
