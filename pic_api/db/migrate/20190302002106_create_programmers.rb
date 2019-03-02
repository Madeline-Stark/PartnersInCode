class CreateProgrammers < ActiveRecord::Migration[5.2]
  def change
    create_table :programmers do |t|
      t.string :name
      t.string :email
      t.string :languages
      t.string :time_zone

      t.timestamps
    end
  end
end
