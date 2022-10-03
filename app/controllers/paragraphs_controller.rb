class ParagraphsController < ApplicationController
  before_action :set_current_story, only: [:index, :create, :update, :destroy]

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

  def update
    paragraph = @current_story.paragraphs.find_by(id: params[:id])
    if paragraph
      paragraph.update(paragraph_params)
      render json: paragraph
    else
      render json: { error: "Paragraph not found" }, status: :not_found
    end
  end

  def destroy
    paragraph = @current_story.paragraphs.find_by(id: params[:id])
    if paragraph
      paragraph.destroy
      render json: paragraph, status: :ok
    else
      render json: { error: "Paragraph not found" }, status: :not_found
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
