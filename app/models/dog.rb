class Dog < ApplicationRecord
  has_many :user_dogs, dependent: :destroy
  has_many :users, through: :user_dogs
end
