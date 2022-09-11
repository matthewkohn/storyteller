class GenresController < ApplicationController
  def index
    genres = Genre.all
    # byebug
    render json: genres, status: :ok
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
