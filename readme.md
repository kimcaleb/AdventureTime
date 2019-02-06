# Adventure Time
## Description
A full stack application that allows users to create a personalized itinerary where they can add the city they are interested in going, and create a list of places within that city by using the Google Places API(https://developers.google.com/places/web-service/intro).

## how to use locally
* clone this repo
* run npm install in server.js directory
* Create .env environment, mlab MongoDB database, and obtain Google Geocode & Places API Key. Set mlab link, PORT, and API key inside the .env file. Set the PORT to 3000. 
* run npm install in client package
* npm start both the backend server and client server. 

## Technologies Used
* HTML5 
* Bootstrap
* CSS3
* Node.js
* Express
* JWT Token/Authentication
* MongoDB/Mongoose ORM
* React
* MERN Stack
* Google Places API
* Google Geocode API
* Postman
* [Heroku] (https://itsadventuretime.herokuapp.com/)
* Git
* [GitHub] (https://github.com/kimcaleb/AdventureTime)
  [GitHub] (https://github.com/seanberrie/AdventureTime) 
* [Trello] (https://trello.com/b/npNIJPYa/adventure-time)
## Wireframes
[link to wireframes on balsamiq] (https://balsamiq.cloud/s8grpme/p1q6thw)
### Landing Page
![landing page](https://i.imgur.com/IjjCAFK.png)

### Sign Up Page
![Sign Up](https://i.imgur.com/vhrCb5o.png)

### Profile Page
![my records](https://i.imgur.com/8GeBa1k.jpg)

### Edit Profile Page
![Add Record](https://i.imgur.com/cOtOe4g.png)

### Add a City Page
![edit account](https://i.imgur.com/ShZZSbu.png)

### Add a Place Page
![edit record](https://i.imgur.com/MsKC4jt.jpg)

### Features

* Delete a place function
 ![signup code snippet](https://i.imgur.com/TG12Mz3.png)
* 3 models using embedding
![3 models](https://i.imgur.com/suVMwfu.png)
* Pinging Google Geocode and Places API in succession. 
 ![snippet](https://i.imgur.com/APqXUTC.png)
* Linking places to external site  
 ![snippet](https://i.imgur.com/QkFT8Kd.png)

### Credits

* Sean Berrie & Caleb Kim


### Designed and Developed by

* Caleb Kim [github link](https://github.com/kimcaleb “My Github link”) 
* Sean Berrie [github link](https://github.com/seanberrie “My Github link”)

### Links
* [Heroku Live Website] (https://itsadventuretime.herokuapp.com/)

### Challenges
* Deleting a Place. (2 embedded models)
* Switching our objective from using the Skyscanner API to Google Places API. 
* Learning ways to pass data/arguments between components and forms within components. 
* Using 3rd Party API in React that routes to the server backend. 

### I’m Winning
* Design.
* Learning how to use SVG to manipulate text. 
* Getting all our models and 3rd Party API to work together.  

### Challenges I want to still complete
* Implement Skyscanner API. 
* Create search query for a specfic destination
* Implement a map (Google Maps API) for the places. 
* Refactor the view for rending the results from browse. 