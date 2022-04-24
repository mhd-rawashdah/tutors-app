Tutors App (Backend & Client Side)
=======

Demo
----------

Here the demo link deployed to Heroku:
https://tutors-zone.herokuapp.com/

Prerequisite
---------------
* Nodejs >= v16.0.0
* Angular-Cli v13:  `npm install -g @angular/cli@13` 



How to run:
---------------

### Server
1. Make sure to have `Nodejs >= v16`
2. Go to server directory `cd server`
3. Set the Environment variables by copy `.env.example` file and change its name to `.env` and put on save root. 
4. Make sure you are running MySql Server locally.
5. To run the project run  ```sh run.sh``` command which will take care of:
    - Install the dependencies.
    - Create DB.
     - Run migration.
    - Run Seeds.
    - Run Server.
6. Go to server/package.json and check the available scripts.


### Client 

1. Make sure to instal Angular-Cli globally
2. Go to client Directory  `cd client`
3. Run ```npm install``` to install the dependencies 
4. To run the project run 
```ng serve```

Backend
-------------
* Node.js **V16.x**
* Express

Database
-------------
* MySQL

![Database-ERD](https://user-images.githubusercontent.com/34889770/164973340-58011f34-b99c-4955-8b63-f027b8ada2fc.png)

