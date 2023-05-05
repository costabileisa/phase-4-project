class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true
  validates :username, uniqueness: true
  validates :username, length: { in: 5..30 }

  has_many :user_dogs, dependent: :destroy
  has_many :dogs, through: :user_dogs
end
