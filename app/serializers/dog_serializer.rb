class DogSerializer < ActiveModel::Serializer
  attributes :id, :url

  has_many :users
end
