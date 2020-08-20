require "application_system_test_case"

class LocationsTest < ApplicationSystemTestCase

    test "locations page shows map and markers" do
        visit "/locations"
        assert_selector "#app-module__mapid___3xj8v"
        page.assert_selector('.leaflet-marker-icon')
        first('.leaflet-marker-icon').click
        page.assert_selector('.leaflet-popup-content-wrapper')
    end

end
