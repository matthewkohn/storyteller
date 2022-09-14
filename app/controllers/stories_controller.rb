class StoriesController < ApplicationController

  def show
    story = Story.find_by(id: params[:id])
    render json: story, status: :ok
  end

  def create
    @current_genre = Genre.find_by(id: params[:genre_id])
    # byebug
    story = @current_genre.stories.build(story_params)
    if story.save
      render json: story, status: :created
    else
      render json: { error: "There was a problem creating this story" }
    end
  end


  private

  def story_params
    params.permit(:id, :genre_id, :title)
  end


end
