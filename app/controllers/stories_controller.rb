class StoriesController < ApplicationController
  before_action :set_current_genre, only: [:index, :create]

  def index
    stories = @current_genre.stories.all
    render json: stories, status: :ok
  end

  def show
    current_story = Story.find_by(id: params[:id])
    render json: current_story, status: :ok
  end

  def create
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
  
  def set_current_genre
    @current_genre = Genre.find_by(id: params[:genre_id])
  end

end
