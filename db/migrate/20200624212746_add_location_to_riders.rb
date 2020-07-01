class AddLocationToRiders < ActiveRecord::Migration[6.0]
  def change
    add_column :riders, :location, :decimal
  end
end
