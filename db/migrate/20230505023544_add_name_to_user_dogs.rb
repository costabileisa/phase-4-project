class AddNameToUserDogs < ActiveRecord::Migration[6.1]
  def change
    add_column :user_dogs, :name, :string
  end
end
