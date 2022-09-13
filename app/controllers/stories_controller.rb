class StoriesController < ApplicationController

  def show
    story = Story.find_by(id: params[:id])
    render json: story, status: :ok
  end

  

end
