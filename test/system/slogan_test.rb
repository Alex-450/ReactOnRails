require "application_system_test_case"

class SloganTest < ApplicationSystemTestCase

    test "fill in slogan form and submit" do
        visit "/contest"
        assert_selector "input"
        page.fill_in 'e.g. Alex', with: 'Bob'
        page.fill_in 'e.g. Smith', with: 'Jones'
        page.fill_in 'e.g. alex.smith@email.com', with: 'test@email.com'
        page.fill_in 'e.g. older but boulder', with: 'my test slogan goes here'
        click_on 'Send →'
        assert_text 'Thanks!'
    end

end