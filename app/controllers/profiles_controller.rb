class ProfilesController < ApplicationController
  # def index
  #   render json: @current_user.profile
  # end

  def create
    # byebug
    profile = @current_user.build_profile(profile_params)
    if profile.save
      render json: profile, status: :created      
    else
      render json: { error: "There was a problem creating this profile."}, status: 400
    end
  end

  # def update
  #   profile = @current_user.profiles
  #   if profile
  #     profile.update!(profile_params)
  #     render json: profile, status: updated
  #   else
  #     render json: { error: "Couldn't update this profile"}
  #   end
  # end

  private

  def profile_params
    params.permit(
      :user_id,
      :favorite_author,
      :favorite_book,
      :favorite_audiobook,
      :favorite_podcast
    )
  end

end
