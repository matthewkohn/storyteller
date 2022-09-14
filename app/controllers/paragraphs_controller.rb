class ParagraphsController < ApplicationController
  before_action :set_current_story, only: [:index, :create]

  def index
    paragraphs = @current_story.paragraphs
    render json: paragraphs, status: :ok
  end

  def create
    contribution = @current_story.paragraphs.build(paragraph_params)
    # byebug
    if contribution.save
      render json: contribution, status: :created
    else
      render json: { error: "Uh oh, something's wrong with creating this paragraph."}
    end
  end


  private

  def paragraph_params
    params.permit(:id, :author_id, :story_id, :rich_text_str)
  end

  def set_current_story
    @current_story = Story.find_by(id: params[:story_id])
  end

end
