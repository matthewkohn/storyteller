class ParagraphSerializer < ActiveModel::Serializer
  attributes :id, :rich_text_str, :created_at

  attribute :author do
    self.object.author.name
  end


end
