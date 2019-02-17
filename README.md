# README

Pillow is a real estate marketplace, inspired by Zillow.

## Features

### Homes

### Home Search & Google Map

### Saves

### Listings

## Project Design

Pillow was designed over a two-week period in the Winter of 2018-2019. The initial proposal, located in the Wiki, includes MVP features with a timeline, API endpoints, and database schema. Given the short time-frame of the project, I focused on developing a core set of bug-free features and smooth navigation.

## Technologies

Pillow is build on a Ruby on Rails backend, using a RESTful API and a PostgreSQL database. Backend data is handled as JSON, and HTML is rendered via React.js. Frontend Redux states have separate reducers and actions for users, homes, saves, session, errors, and search filters. AJAX requests are made through jQuery, and returned JSON objects are parsed by React, following the Redux cycle.

The map is displayed via the Google Map API. Images are stored on Amazon S3.

## Future

### UI

### Save Searches

### Add Properties