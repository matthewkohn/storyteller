class Story < ApplicationRecord
  belongs_to :genre
  has_many :paragraphs
  has_many :authors, through: :paragraphs

end
