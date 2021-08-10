# README

This is a Rails app with React frontend and Bootstrap css.

External API calls are made using the Flickr public API and the map feature was built with Leaflet (https://react-leaflet.js.org/).

## Versioning

- Ruby version: 2.7.3
- Rails version: 6.0.0
- React version: 16.13.1
- Bootstrap version: 4.5.0
- Leaflet version: 1.6.0

## Running the application

1. Open the root folder
2. run `bundle install` to install all gems
3. run `yarn install` to make sure packages are up to date
4. run `rake db:migrate` to make sure db is up to date
5. run `rake db:seed` to populate db data
6. run bin/rails s to start the puma server
7. Go to the specified localhost address

## Features

- Countdown timer to date of race on homepage
- Image carousel using Flickr API images
- Gallery using Flickr API images
- Map showing positions of riders in the race using react-leaflet.js
- Contest submission form that sends input to database

## Running tests

### Running individual tests:

1. Open the root folder
2. To run a particular test, e.g. the riders controller test, run bin/ rails test _filename_ e.g. `bin/rails test test/controllers/api_v1_riders_controller_test.rb`

### Running all tests:

1. Open the root folder
2. Run `bin/rails test` to run all controller tests OR `bin/rails test:system test` to run all tests including system tests.
