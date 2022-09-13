class StorySerializer < ActiveModel::Serializer
  attributes :id, :title
  # has_one :genre_id
end
