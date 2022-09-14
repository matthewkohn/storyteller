class Paragraph < ApplicationRecord
  belongs_to :author
  belongs_to :story
  
end
