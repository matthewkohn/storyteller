class StoriesController < ApplicationController
  before_action :set_current_genre, only: [:create, :stories_by_genre]
  before_action :set_current_author, only: [:stories_by_author]

  def index
    stories = Story.all
    render json: stories, status: :ok
  end

  def show
    current_story = Story.find_by(id: params[:id])
    render json: current_story, status: :ok, serializer: StoryContentsSerializer
  end

  def create
    story = @current_genre.stories.build(story_params)
    if story.save
      render json: story, status: :created
    else
      render json: { error: "There was a problem creating this story" }
    end
  end

  def stories_by_author
    stories = Story.joins(paragraphs: :author).where(authors: {id: @current_author.id}).distinct
    render json: stories, status: :ok
  end

  def stories_by_genre
    stories = @current_genre.stories
    render json: stories, status: :ok
  end

  
  private

  def story_params
    params.permit(:id, :genre_id, :author_id, :title)
  end

  def set_current_genre
    @current_genre = Genre.find_by(id: params[:genre_id])
  end

  def set_current_author
    @current_author = Author.find_by(id: params[:author_id])
  end

end
