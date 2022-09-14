class Author < ApplicationRecord
  belongs_to :user
  has_many :paragraphs
  has_many :stories, through: :paragraphs
  
end
