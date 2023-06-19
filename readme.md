Questions

APIs to be Created

1. Create a To-Do Item API - POST `/api/todo`
   
    The request body should include fields for title and description. The status should be set to 'not completed' by default.

2. Get All To-Do Items API - GET `/api/todo`

    This should return all the to-do items in the database.

3. Get a Single To-Do Item API - GET `/api/todo/:id`

    This should return a specific to-do item based on the provided id.

4. Update a To-Do Item API - PUT `/api/todo/:id`

    This should update the to-do item based on the provided id. The request body can contain an updated title, description, or status.

5. Delete a To-Do Item API - DELETE `/api/todo/:id`

    This should delete the specified to-do item based on the provided id.
   
