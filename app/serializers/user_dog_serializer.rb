class UserDogSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :dog_id, :name

  belongs_to :user
  belongs_to :dog
end
