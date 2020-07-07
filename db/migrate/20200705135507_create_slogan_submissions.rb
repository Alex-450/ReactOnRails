class CreateSloganSubmissions < ActiveRecord::Migration[6.0]
  def change
    create_table :slogan_submissions do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :slogan
    end
  end
end
