class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio

  has_many :user_dogs
  has_many :dogs, through: :user_dogs
end
