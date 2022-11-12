class StorySerializer < ActiveModel::Serializer
  attributes :title

  attribute :genre_category do
    self.object.genre.name
  end

  attribute :author_summary do
    authors = self.object.authors
    authors.map { |a| a.name }.uniq
  end

  attributes :id, :updated_at

end
