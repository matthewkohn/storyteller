class AuthorsController < ApplicationController

  def create
    author = @current_user.authors.create!(author_params)
    render json: author, status: :created
  end

  private

  def author_params
    params.permit(:name, :anonymous)
  end


end
