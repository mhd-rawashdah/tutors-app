'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    const users = [
      {
        "id": "12277b3f-0b5d-4226-880f-5b31b5e1b90e",
        "firstName": "Cully",
        "lastName": "McDonagh",
        "username": "cmcdonagh0",
        "email": "cmcdonagh0@unesco.org",
        "password": "e6Id6fkO",
        "gender": "Male",
        "age": 36,
        "phoneNumber": "442-286-7749",
        "imageURL": "http://dummyimage.com/400x400.png/ff4444/ffffff",
        "roleId": 1,
        "countryId": "KW"
      },
      {
        "id": "58824b95-5e50-4778-b0eb-b4571d7309a4",
        "firstName": "Tiffany",
        "lastName": "Verne",
        "username": "tverne1",
        "email": "tverne1@china.com.cn",
        "password": "kNuxRzXpoW",
        "gender": "Female",
        "age": 39,
        "phoneNumber": "688-917-5730",
        "imageURL": "http://dummyimage.com/400x400.png/dddddd/000000",
        "roleId": 1,
        "countryId": "SY"
      },
      {
        "id": "77fc817e-1c3d-4fe4-aac6-bfb1083ee6b2",
        "firstName": "Gwen",
        "lastName": "Gerler",
        "username": "ggerler2",
        "email": "ggerler2@wordpress.org",
        "password": "UJu7vj",
        "gender": "Male",
        "age": 54,
        "phoneNumber": "435-990-1830",
        "imageURL": "http://dummyimage.com/400x400.png/cc0000/ffffff",
        "roleId": 1,
        "countryId": "AE"
      },
      {
        "id": "8474b0e9-ce90-424b-b372-f1dc0981ec13",
        "firstName": "Redd",
        "lastName": "Emanuelli",
        "username": "remanuelli3",
        "email": "remanuelli3@toplist.cz",
        "password": "viV71JaZlYE",
        "gender": "Male",
        "age": 66,
        "phoneNumber": "978-869-5942",
        "imageURL": "http://dummyimage.com/400x400.png/ff4444/ffffff",
        "roleId": 1,
        "countryId": "EG"
      },
      {
        "id": "d278002e-cd58-4f07-b8ff-5f702468472d",
        "firstName": "Felisha",
        "lastName": "Furby",
        "username": "ffurby4",
        "email": "ffurby4@about.me",
        "password": "D0XvWqRC2",
        "gender": "Female",
        "age": 2,
        "phoneNumber": "723-110-0048",
        "imageURL": "http://dummyimage.com/400x400.png/dddddd/000000",
        "roleId": 1,
        "countryId": "KW"
      },
      {
        "id": "702ac240-7089-45f1-be5d-e8d6ff93d596",
        "firstName": "Ganny",
        "lastName": "Lesmonde",
        "username": "glesmonde5",
        "email": "glesmonde5@epa.gov",
        "password": "clCw2qZjF",
        "gender": "Female",
        "age": 34,
        "phoneNumber": "159-917-8618",
        "imageURL": "http://dummyimage.com/400x400.png/dddddd/000000",
        "roleId": 1,
        "countryId": "EG"
      },
      {
        "id": "2a8e81a8-cd4e-488e-b8b9-fb1a819638c5",
        "firstName": "Edd",
        "lastName": "Kinnett",
        "username": "ekinnett6",
        "email": "ekinnett6@hao123.com",
        "password": "wUlWyYco9t0",
        "gender": "Male",
        "age": 50,
        "phoneNumber": "704-605-7709",
        "imageURL": "http://dummyimage.com/400x400.png/cc0000/ffffff",
        "roleId": 1,
        "countryId": "AE"
      },
      {
        "id": "f94ecef6-df19-429a-804e-77afaaa4af60",
        "firstName": "Zechariah",
        "lastName": "Gerlts",
        "username": "zgerlts7",
        "email": "zgerlts7@tripadvisor.com",
        "password": "x5PjllT3nsV0",
        "gender": "Male",
        "age": 47,
        "phoneNumber": "884-679-4596",
        "imageURL": "http://dummyimage.com/400x400.png/ff4444/ffffff",
        "roleId": 1,
        "countryId": "JO"
      },
      {
        "id": "509d238e-529a-4e7e-be51-5f3c6b379ca6",
        "firstName": "Orson",
        "lastName": "Powell",
        "username": "opowell8",
        "email": "opowell8@hatena.ne.jp",
        "password": "rHqVYImsfO0",
        "gender": "Male",
        "age": 51,
        "phoneNumber": "158-779-8669",
        "imageURL": "http://dummyimage.com/400x400.png/ff4444/ffffff",
        "roleId": 1,
        "countryId": "KW"
      },
      {
        "id": "f627f0ef-1e6c-4c7e-ad79-8ac3d259cf86",
        "firstName": "Markus",
        "lastName": "Roscher",
        "username": "mroscher9",
        "email": "mroscher9@paypal.com",
        "password": "672HqfVPhv",
        "gender": "Male",
        "age": 55,
        "phoneNumber": "811-463-3102",
        "imageURL": "http://dummyimage.com/400x400.png/cc0000/ffffff",
        "roleId": 1,
        "countryId": "JO"
      }
    ]
    
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
