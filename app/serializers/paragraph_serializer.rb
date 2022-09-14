class ParagraphSerializer < ActiveModel::Serializer
  attributes :id, :rich_text_str, :created_at

  attribute :author do
    if self.object.author.anonymous
      "Anonymous"
    else
      self.object.author.name
    end
  end


end
