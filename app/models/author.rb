class Author < ApplicationRecord
  belongs_to :user
  has_many :paragraphs
  has_many :stories, through: :paragraphs
  # validates :name, presence: true, uniqueness: true
  
end
