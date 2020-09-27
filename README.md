# traffic_check

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bac7f5eddce04e66a1d4fc4722088dd4)](https://app.codacy.com/gh/BuildForSDGCohort2/traffic_check?utm_source=github.com&utm_medium=referral&utm_content=BuildForSDGCohort2/traffic_check&utm_campaign=Badge_Grade_Settings)

## users APIs

### "/api/v1/login"

logs in a user using the username and password, A user **token** is then generated for use to access the **routes**

### "/api/register"

signs up the user using:
-username
-email
-password
-jobrole
jobrole is either a normal user or an admin

### GET "/api/v1/users"

Gets all users in the database. This operation is only possible if you are an admin.

## Accident routes

### POST "/api/v1/report_incident"

creates and accident case

### GET "/api/v1/incident/:id"

gets one specific traffic incident

### GET "/api/v1/incidents"

Gets all the traffic incidents reported by users

### DELETE "/api/v1/delete_incident:id"

Deletes any specific traffic incident.

### Methods Urls Actions

    -POST	    /api/auth/signup	    signup new account
    -POST	    /api/auth/signin	    login an account
    -GET	    /api/test/all	        retrieve public content
    -GET	    /api/test/user	        access User’s content
    -GET	    /api/test/mod	        access Moderator’s content
    -GET	    /api/test/admin	        access Admin’s content

#### user signs up using:

-username
-email
-password

#### user signs in using:

-username
-password

### HOSTING

![Tux, the Linux mascot](/images/tux.png)
This backend is hosted at [Heroku](https://traffic-check.herokuapp.com/api/v1/incidents)
