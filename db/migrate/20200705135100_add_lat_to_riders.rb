class AddLatToRiders < ActiveRecord::Migration[6.0]
  def change
    add_column :riders, :lat, :string
  end
end
