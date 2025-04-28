 
 ## Capstone project ##


## GET REQUEST API ##

This GET /events router is used to retrieve the list of all events available in the Event Booking Website. When a user accesses this route, the server fetches all event data from the database and sends it back as a response. This is helpful for users who wish to view all the upcoming events.

## Steps for Setting Up the GET ##

1.Inside this file,I import the necessary controller (e.g., event controller) and set up the GET /events route.

2.This route will listen for incoming requests at /api/events and forward the request to the event controller for processing.

3.The route will forward the request to the event controller that handles fetching events from the database.

## GET Handling: ##

1.The eventController will fetch all events from the MongoDB database using Mongoose.

2.If the data retrieval is successful, it will return the list of events.

3.If there is an error (e.g., database issue), it will return an error message.

## Send Response: ##

1.After processing the request, the router sends a response back to the client.

2.Success responses return the list of events in JSON format.

3.Error responses will provide an error message (e.g., failed database query).


[
  {
    "_id": "60c72b1f4f1a2f4b3c8c8d8d",
    "title": "Music Concert",
    "date": "2022-12-25T19:00:00.000Z",
    "location": "Stadium ABC",
    "availableSeats": 100,
    "description": "A grand music concert featuring top artists."
  },
  {
    "_id": "60c72b1f4f1a2f4b3c8c8d8e",
    "title": "Tech Conference",
    "date": "2022-11-30T09:00:00.000Z",
    "location": "Conference Hall XYZ",
    "availableSeats": 200,
    "description": "A conference on the latest in technology."
  }
]


