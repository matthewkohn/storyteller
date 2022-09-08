class CreateAuthors < ActiveRecord::Migration[7.0]
  def change
    create_table :authors do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.boolean :anonymous, default: false

      t.timestamps
    end
  end
end
