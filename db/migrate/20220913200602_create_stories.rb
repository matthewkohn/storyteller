class CreateStories < ActiveRecord::Migration[7.0]
  def change
    create_table :stories do |t|
      t.belongs_to :genre, null: false, foreign_key: true
      t.string :title

      t.timestamps
    end
  end
end
