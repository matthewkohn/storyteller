class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :favorite_author
      t.string :favorite_book
      t.string :favorite_podcast
      t.string :favorite_audiobook

      t.timestamps
    end
  end
end
