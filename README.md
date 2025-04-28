## Update Event API (PUT Request) ##

This API endpoint allows you to update the details of an existing event using its unique identifier. The endpoint expects a PUT request to the URL path /events/:id, where :id is the ID of the event you want to update. In the request body, you can provide updated values for the event's properties such as title, Date, location, availableSeats, and description

1.The Update Event API endpoint handles HTTP PUT requests at the route /events/:id, where :id is the unique identifier of the event to be updated.

2.When a request is received, the server uses the event ID from the URL parameters to find and update the corresponding event in the database.

3.The update operation uses findByIdAndUpdate with options { new: true, runValidators: true } to return the updated document and ensure all schema validations are enforced.

4.This API enables clients to modify one or multiple fields of an existing event such as changing the title, date, location, available seats, or description.

5.This API enables clients to modify one or multiple fields of an existing event such as changing the title, date, location, available seats, or description.

6.On successful update, the API returns a 200 status code and the updated event object in JSON format. 
