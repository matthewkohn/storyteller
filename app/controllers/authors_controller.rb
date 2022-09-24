class AuthorsController < ApplicationController

  def index
    render json: @current_user.authors, status: :ok
  end

  def create
    author = @current_user.authors.create!(author_params)
    render json: author, status: :created
  end

  private

  def author_params
    params.permit(:name, :anonymous)
  end


end
