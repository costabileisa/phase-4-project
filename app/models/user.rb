class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true
  validates :username, uniqueness: true

  has_many :user_dogs
  has_many :dogs, through: :user_dogs
end
