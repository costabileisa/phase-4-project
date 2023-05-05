class DogSerializer < ActiveModel::Serializer
  attributes :id, :url, :dogid

  has_many :users
end
