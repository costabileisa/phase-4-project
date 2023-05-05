class Dog < ApplicationRecord
  validates :url, presence: true
  validates :url, uniqueness: true

  has_many :user_dogs, dependent: :destroy
  has_many :users, through: :user_dogs
end
