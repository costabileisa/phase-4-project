class RemoveDogidFromDogs < ActiveRecord::Migration[6.1]
  def change
    remove_column :dogs, :dogid
  end
end
