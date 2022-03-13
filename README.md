# Movie Project REST API

## Description

This project is part of Movie Project.

**Link** : https://movie-api-blue.vercel.app

### Why this project is made

This project is back-end part Movie Project.

### Technologies

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* JsonWebToken(jwt)
* @hapi/joi

### How to start project

```
cd server
npm i
node index.js
```

## How to use

### Register

Send **Post** request to **/api/user/register** with body
```
{
  "email" : {email},
  "username" : {username},
  "password" : {password}
}
```

if request is succesful you will recieve response with data

### Login

Send **POST** request to **/api/user/login** with body
```
{
  "email" : {email},
  "password" : {password}
}
```

if request is succesful you will recieve response with token

### Get all movies

Send **GET** request to **/api/movie**. You dont need token to do that.

### Get movie by id

Send **GET** request to **/api/movie/:id** with id of the move you want to recieve. Its **authorized** request, so you need to add token in request header with key **token**.

### Post movie

Send **POST** request to **/api/movie**. Its **authorized** request, so you need to add token in request header with key **token**. Example body of the request:

```
{
        "ownerId" : "6227e0282ef71d2586240870",
        "title" : "Titanik",
        "plot" : "One big ship sink in the ocean",
        "genre" : "drama",
        "actors" : ["Leo", "other one", "bad guy"],
        "releaseDate" : "Sun Dec 17 1995 03:24:00 GMT",
        "country" : "USA",
        "imageUrl" : "urlWithMin10Symbols",
        "trailerUrl" : "urlWithMin10Symbols",
        "budget" : "100000",
        "oscar" : true,
        "director" : "Big Boss",
        "screenwriter" : "The other big boss"
}
```

### Edit movie

Send **PATCH** request to **/api/movie/:id** with id of the move you want to edit. Its **authorized** request, so you need to add token in request header with key **token**. Example body of the request:

```
{
        "plot" : "One big ship sink in the ocean and Leo die",
        "genre" : "romantic move",
}
```

### Delete movie

Send **DELETE** request to **/api/movie/:id** with id of the move you want to delete. Its **authorized** request, so you need to add token in request header with key **token**. 
