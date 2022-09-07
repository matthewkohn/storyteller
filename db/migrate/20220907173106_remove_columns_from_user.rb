class RemoveColumnsFromUser < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :favorite_audiobook
    remove_column :users, :favorite_author
    remove_column :users, :favorite_book
    remove_column :users, :favorite_podcast
  end
end
