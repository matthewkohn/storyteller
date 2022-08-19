class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :favorite_author
      t.string :favorite_book
      t.string :favorite_audiobook
      t.string :favorite_podcast

      t.timestamps
    end
  end
end
