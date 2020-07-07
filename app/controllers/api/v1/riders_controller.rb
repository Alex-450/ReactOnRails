class Api::V1::RidersController < ApplicationController
    def index
        render json: Rider.all
    end
end
