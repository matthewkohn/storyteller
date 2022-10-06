# Storyteller<a id="top"></a>
Storyteller is a turn-based creative writing app using React, Rails, Postgresql, BCrypt, and is hosted on Heroku.

## Final Project Requirements
This app was made to fulfill project requirements for Flatiron School Software Engineering Phase 5 Final Project.
These requirements that have been met or surpassed are:
* Include a many to many relationship.
* Implement a minimum of 4 models.
* Implement a minimum of 5 client side routes using React router.
* Implement password protection and authentication.
* Include full CRUD on at least 1 model, following REST conventions.
* Implement validations and error handling.
* Implement something new not taught in the curriculum. * Implement useContext or Redux.



## Table of Contents
---
* [Requirements](#dep)
* [Setup](#start)
* [Configuration](#config)
* [Media](#media)
<!-- * [ActiveRecord Table Relationships](#rel) -->
<!-- * [API Endpoints](#routes) -->
* [License](#license)


## Requirements<a id="dep"></a>
---

[Back to Top](#top)

### __API__
* ruby        v2.7.4
* rails       v7.0.3
* postgresql  v14.5
* puma        v5.0
* bcrypt      v3.1.7
* rack-cors

### __Client__
Dependencies for the Client are located in ```"./client/package.json"```.
#### React & React Router
* react               v^18.2.0
* react-dom           v^18.2.0
* react-router-dom    v^6.3.0
* react-scripts       v5.0.1
#### Material UI & Styled Components
* @emotion/react      v^11.10.0
* @emotion/styled     v^11.10.0
* @mui/icons-material v^5.8.4
* @mui/material       v^5.10.1
* styled-components   v^5.3.5
#### DraftJS
* draft-js            v^0.11.7
* draft-js-export-html v^1.4.1




## Setup<a id="start"></a>
---

1. Fork and clone this repo
```
git clone git@github.com:matthewkohn/storyteller.git your-storyteller-app-name
cd your-storyteller-app-name
git remote rm origin
```
2. Create a new repository on GitHub, connect it to your local repository, and push up your code.
```
git remote add origin git@github.com:your-username/your-storyteller-app-name.git
push -u origin main
```
3. Install dependencies
```
bundle install
npm install --prefix client
```
4. Create & Start the PostGresQl server with
```
rails db:create db:migrate db:seed
sudo service postgresql start  
```
_(you may be prompted for your password to start )_

5. Once PostGresQl server starts successfully, start the server:
```
rails s
```
and in a separate terminal run
```
npm start --prefix client
```
Your client should start in http://localhost:4000

---

## Configuration<a id="config"></a>
[(back to top)](#top)

The Rails API is configured to run locally on PORT:3000.
The client is stored under ```'./client'``` and runs locally on PORT:4000. Make sure you have dependencies installed before forking and cloning.

This app is also configured to allow ActionDispatch::Session::CookieStore cookies & session middleware, as well as use SameSite=Strict for all cookies to protect against CSRF.


## Media<a id="media"></a>
[(back to top)](#top)
### Youtube demonstration of how the app works [here](https://www.youtube.com/watch?v=2daGy-nWTF0)

<img src="public/video1315748616 (4).gif" alt="Storyteller Gif">

### DB Diagram describing model relationships:
<img src="public/db-diagram-storyteller.png" alt="Storyteller Gif">



## License <a id="license"></a>
[Read the license here](./LICENSE)

##### [Back to Top](#top)