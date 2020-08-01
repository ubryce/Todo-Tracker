# Todo Track
 A website where authenticated users have the ability to create a todo list. Each user and their todos are saved into a MongoDB to save all of their data. Passport and JWT is used to authenticate users. JWT is also used to hide specific routes that unauthenticated users should not have access too and same with some routes that should not be shown to authenticated users.
 
 LINK: https://mern-todo-track.herokuapp.com/
 
 This application uses Node.js using Express for the back end and React and React Router for the front end. While using MongoDB for our database and passport and JWT for authentication.
 
###### API's
1. MongoDB: https://www.mongodb.com/

## What I learned
* How to protect routes depending on authentication or user roles that are stored in the database
* How to set States in React
* How to use Passport for user Authentication
* What JWT and how to properly use it
* How to send information from the Client side to the Server side
* How to use promises

## Running the app

```bash
1. Download zip off github

2. Open the terminal and download node_modules by typing "npm install"

3. Run the program by typing "npm run start"
# development
$ npm run start 

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

```
