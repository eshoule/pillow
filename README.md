# README

![Small feed](app/assets/images/logo.jpg)

[Pillow](https://pillow-app.herokuapp.com/#/) is a real estate marketplace inspired by Zillow. It is a full-stack web application built on React/Redux, Ruby on Rails, and a ProgresSQL database.

## Technologies

Pillow is built on a Ruby on Rails backend, using a RESTful API and a PostgreSQL database. Backend data is handled as JSON, and HTML is rendered via React.js. Frontend Redux states have separate reducers and actions for users, homes, saves, session, errors, and search filters. AJAX requests are made through jQuery, and returned JSON objects are parsed by React, following the Redux cycle.

The map is displayed via the Google Map API. Images are stored on Amazon S3.