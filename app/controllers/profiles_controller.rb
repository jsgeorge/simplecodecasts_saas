class ProfilesController < ApplicationController
    def new
        #each user fills out own form
        @user = User.find(params[:user_id])
        @profile = @user.build_profile
    end
end