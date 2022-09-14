class StorySerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :paragraphs

  attribute :genre do
    self.object.genre.name
  end

end
