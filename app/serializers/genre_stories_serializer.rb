class GenreStoriesSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :stories
end
