class AddLongToRiders < ActiveRecord::Migration[6.0]
  def change
    add_column :riders, :long, :string
  end
end
