# Photolabs

PhotoLabs is a React-based single-page application (SPA) that allows users to view, interact with, and favorite photos across various categories (topics). The app communicates with a pre-existing API server to fetch data and dynamically display photos, allowing users to engage with their favorite photos.

## Project Description
PhotoLabs uses a client-side React application that communicates with a server-side API to display and interact with photos. The app features browsing photos by categories (topics), viewing detailed images, and favoriting photos.

## Goal
The goal of this project is to build a client-side single-page application (SPA) using React and integrate it with an API for fetching and displaying photos. The SPA will provide an interactive and dynamic user experience for exploring photos by categories and liking them.

## Functional Requirements
* Photo Viewing: Users can view photos loaded from an API, displayed on the homepage.
* Topic Navigation: Users can navigate through different photo categories (called topics).
* Photo Details: Users can click on a photo to view a larger version and relevant or similar photos.
* Photo Liking: Users can like photos from anywhere within the application where the photo is displayed.
* Heart Icon Notification: A heart icon in the navigation bar will notify users of any liked photos.
* Client-Side Communication: The client will make API requests to load photo data from the backend.


## Technologies Used
* React: For building the user interface and handling the view layer.
* Webpack: For bundling the client-side assets.
* Babel: For transpiling modern JavaScript features.
* Express.js: For building the API server and managing requests.
* PostgreSQL: For storing and retrieving photo and topic data.


## Setup

Clone this repository. 

Note that two different servers will be running during development:

1) Client-side Webpack development server 
2) API server to provide photo data. 


[Navigate to the frontend folder and follow instructions in the README.md file.](/frontend/)

[Navigate to the backend folder and follow instructions in the README.md file.](/backend/) 

## Screenshots

![Photolabs with the Animal topic filterd](https://github.com/TayrineSoares/photolabs/blob/main/docs/photolabs1.jpg?raw=true)

![Photolabs with modal open](https://github.com/TayrineSoares/photolabs/blob/main/docs/photolabsmodal.jpg?raw=true)

## Stretch Goals

* View Only Liked Photos: Users can toggle a view to show only the photos they have liked.
* Navigate Back to Home Page: Clicking on the logo in the navigation resets the selected topic and takes users back to the home page, showing all available photos.
* Pagination or infinite scrolling. 
