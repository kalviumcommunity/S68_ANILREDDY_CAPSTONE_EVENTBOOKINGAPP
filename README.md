POSTREQUESTAPI
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

 
