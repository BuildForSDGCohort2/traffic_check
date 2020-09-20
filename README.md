# traffic_check

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bac7f5eddce04e66a1d4fc4722088dd4)](https://app.codacy.com/gh/BuildForSDGCohort2/traffic_check?utm_source=github.com&utm_medium=referral&utm_content=BuildForSDGCohort2/traffic_check&utm_campaign=Badge_Grade_Settings)

## users APIs

### "/api/v1/login"

logs in a user using the username and password, A user **token** is then generated for use to access the **routes**

### "/api/sign-up"

signs up the user using:
-firstname
-lastname
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
