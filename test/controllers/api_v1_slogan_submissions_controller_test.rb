require 'test_helper'

class SloganSubmissionsControllerTest < ActionDispatch::IntegrationTest

    
    test "should create new slogan submission" do
        assert_difference('SloganSubmission.count') do
        post '/api/v1/slogan_submissions', params: { slogan_submission: { first_name: 'Alex', last_name: 'Surname', email: 'alex@email.com', slogan: 'here is a slogan to be used for testing and so on' }}
    end
end

test "should show slogan submissions index" do
    get '/api/v1/slogan_submissions'
    assert_response :success
end


end
