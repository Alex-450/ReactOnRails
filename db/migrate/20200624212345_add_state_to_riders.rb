class AddStateToRiders < ActiveRecord::Migration[6.0]
  def change
    add_column :riders, :state, :string
  end
end
