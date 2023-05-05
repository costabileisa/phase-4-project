require 'httparty'


def get_dogs
  response = HTTParty.get('https://api.thedogapi.com/v1/images/search?limit=10')
  dogs = JSON.parse(response.body)

  puts "Seeding Dogs! ..."

  dogs.each do |dog|
    Dog.create!(
      url: dog['url']
    )
  end
end

5.times { get_dogs() }



# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "apple", password: "123")