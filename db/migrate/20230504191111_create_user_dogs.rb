class CreateUserDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :user_dogs do |t|
      t.references :user, null: false, foreign_key: true
      t.references :dog, null: false, foreign_key: true

      t.timestamps
    end
  end
end
