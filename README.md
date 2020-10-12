# traffic_check

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bac7f5eddce04e66a1d4fc4722088dd4)](https://app.codacy.com/gh/BuildForSDGCohort2/traffic_check?utm_source=github.com&utm_medium=referral&utm_content=BuildForSDGCohort2/traffic_check&utm_campaign=Badge_Grade_Settings)

## users APIs

### "/signin"

logs in a user using the email and password, A user **token** is then generated for use to access the **routes**

### "/signup"

signs up the user using:
-username
-email
-password

### GET "/search-users"

Gets all users in the database. This operation is only possible if you are an admin.

## Accident routes

### GET "/allpost"

Gets all accident cases reported

### GET "/getsubpost"

gets an accident subpost

### POST "/createpost"

Creates an incident

### GET "/mypost"

Gets all posts that I have made previously

### DELETE "/deletepost/:postId"

Deletes a post made by the user

### Methods Urls Actions

    -POST	    /signup	        signup new account
    -POST	    /signin	        login an account
    -GET	    /allpost        retrieve public content
    -GET	    /search-users	access User’s content
    

#### user signs up using:

-username
-email
-password

#### user signs in using:

-email
-password

### HOSTING

![Tux, the Linux mascot](/images/tux.png)
This backend is hosted at [Heroku](https://traffic-check.herokuapp.com/api/v1/incidents)
