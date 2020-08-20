require "application_system_test_case"

class GalleryTest < ApplicationSystemTestCase

    test "gallery page has images and next button can be clicked" do
        visit "/gallery"
        assert_selector ".img-thumbnail"
        click_on '→'
        assert_text '2'
        click_on '←'
        assert_text '1'
    end

end
