class GenresController < ApplicationController

  def index
    genres = Genre.all
    render json: genres, status: :ok
  end

  def show
    genre = Genre.find_by(id: params[:id])
    render json: genre, status: :ok, serializer: GenreStoriesSerializer
  end

  def create
    genre = Genre.create!(genre_params)
    render json: genre
  end


  private

  def genre_params
    params.permit(:name)
  end

end
