class Api::V1::SloganSubmissionsController < ApplicationController
    def index
        render json: Slogan_Submission.all
    end
    def create
        slogan_submission = SloganSubmission.create(slogan_submission_params)
        render json: slogan_submission
    end
    
    def slogan_submission_params
        params.require(:slogan_submission).permit(:first_name, :last_name, :email, :slogan)
    end
end