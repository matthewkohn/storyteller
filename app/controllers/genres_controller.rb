class GenresController < ApplicationController
  def index
    genres = Genre.all
    render json: genres
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
