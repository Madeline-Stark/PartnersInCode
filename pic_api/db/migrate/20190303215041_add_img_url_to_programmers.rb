class AddImgUrlToProgrammers < ActiveRecord::Migration[5.2]
  def change
    add_column :programmers, :img_url, :string
  end
end
