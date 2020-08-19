require 'test_helper'

class RidersControllerTest < ActionDispatch::IntegrationTest

    test "should show riders" do
        get '/api/v1/riders'
        assert_response :success
    end

end
