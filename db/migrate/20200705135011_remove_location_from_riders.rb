class RemoveLocationFromRiders < ActiveRecord::Migration[6.0]
  def change
    remove_column :riders, :location, :decimal
  end
end
