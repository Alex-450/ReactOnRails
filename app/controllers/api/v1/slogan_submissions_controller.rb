class Api::V1::SloganSubmissionsController < ApplicationController
    def create
        slogan_submission = SloganSubmission.create(slogan_submission_params)
    end
    def index
        render json: Slogan_Submission.all
    end
    def slogan_submission_params
        params.require(:slogan_submission).permit(:first_name, :last_name, :email, :slogan)
    end
end