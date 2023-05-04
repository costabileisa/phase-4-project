require 'httparty'

response = HTTParty.get('https://api.thedogapi.com/v1/images/search?limit=20')
dogs = JSON.parse(response.body)

dogs.each do |dog|
  Dog.create!(
    breed: dog['breeds'][0]['name'],
    image_url: dog['url']
  )
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "apple", password: "123")