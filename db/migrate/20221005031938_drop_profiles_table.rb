class DropProfilesTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :profiles do |t|
      t.string :favorite_author
      t.string :favorite_book
      t.string :favorite_podcast
      t.string :favorite_audiobook
      t.timestamps null: false
      t.bigint :user_id, null: false
    end
  end
end
