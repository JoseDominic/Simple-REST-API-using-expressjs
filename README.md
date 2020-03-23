# Simple-REST-API-using-expressjs
A REST API for testing which returns JSON data from a mongodb cloud database

# Usage
# method 1
1)send get request to https://expressjs-rest-api.herokuapp.com/student/fetch to get an array of student objects
2)send post request to https://expressjs-rest-api.herokuapp.com/student/add along with form data with keys {name,age,rollno,clss}
to add a new student to db

# method 2
-Download repo
-Host it on a server after installing all package
-Set up environment variable ATLAS_URI with your mongodb URI
-Use get request /student/fetch to get details of students from your DB
-Use post request /student/post from form with keys {name,age,rollno,clss} to add a new student to db
