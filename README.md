<!-- ## Capstone project ##


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

## POST REQUEST API ##

This POST /signup router handles user registration for the Event Booking Website. When users submit their details (username, email, and password), this router will pass the data to the signup controller, which processes the request by checking the uniqueness of the email, hashing the password, and saving the new user to the database.

### Steps for Setting Up the POST ###

1.Inside this file,I import the necessary controller (e.g., signup controller) and set up the POST /signup route.

2.This route will listen for incoming requests at /api/auth/signup and call the corresponding controller to process the signup logic.

3.The request will forward the data to the signup controller for processing.

4.The signup controller will check if the provided email already exists in the database.

5.If the email is unique, it will hash the password using bcrypt and then save the user data in the database.

6.After processing the request, the router sends a response back to the client.

7.Success responses return the user data (excluding the password), while error responses explain what went wrong (e.g., email already exists or internal server error).


## Update Event API (PUT Request) ##

This API endpoint allows you to update the details of an existing event using its unique identifier. The endpoint expects a PUT request to the URL path /events/:id, where :id is the ID of the event you want to update. In the request body, you can provide updated values for the event's properties such as title, Date, location, availableSeats, and description

1.The Update Event API endpoint handles HTTP PUT requests at the route /events/:id, where :id is the unique identifier of the event to be updated.

2.When a request is received, the server uses the event ID from the URL parameters to find and update the corresponding event in the database.

3.The update operation uses findByIdAndUpdate with options { new: true, runValidators: true } to return the updated document and ensure all schema validations are enforced.

4.This API enables clients to modify one or multiple fields of an existing event such as changing the title, date, location, available seats, or description.

5.This API enables clients to modify one or multiple fields of an existing event such as changing the title, date, location, available seats, or description.

6.On successful update, the API returns a 200 status code and the updated event object in JSON format. -->
<!-- 
## Deployed backend server ##

https://s68-anilreddy.onrender.com/ -->


 ## Mongoose Schema Documentation ##

 Event Schema
The Event schema is designed to store all necessary details about an event that users can browse and book.

Schema Fields:

1.Field Name	Type	Description	Required

2.title	String	Title or name of the event

3.location	String	Address or location of the event

4.Date	Date	Scheduled date and time for the event

5.availableSeat	Number	Number of seats available for booking

6.price	Number	Ticket price for the event (optional)

7.description	String	Brief description about the event (optional)

8.createdAt	Date	Timestamp of event creation (auto-generated)


 ## Example JSON Data ##

 {
  "_id": "662c2ab9bfe19f20f8f1a7a3",
  "title": "International Band Music Concert",
  "location": "Grand Central Arena, New York",
  "date": "2025-05-20T19:00:00.000Z",
  "availableSeat": 250,
  "price": 120,
  "description": "Experience an unforgettable night with top international bands!",
  "createdAt": "2025-04-28T10:15:37.000Z",
  "updatedAt": "2025-04-28T10:15:37.000Z"
} 
