class CreateParagraphs < ActiveRecord::Migration[7.0]
  def change
    create_table :paragraphs do |t|
      t.belongs_to :story, null: false, foreign_key: true
      t.belongs_to :author, null: false, foreign_key: true
      t.text :rich_text_str
      
      t.timestamps
    end
  end
end
