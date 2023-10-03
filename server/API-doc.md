# API Documentation

Welcome to the API documentation for the Wander Mark. This API provides various functionalities for user management, posts, comments, and interactions. Below are the details for each endpoint:

## Authentication

For endpoints that require authentication, include an `Authorization` header with the format `Bearer <access_token>`.

&nbsp;

### POST /signup

> Create a new user account

_Request Body_

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secretpassword"
}
```

_Response (201 - Created)_

```json
{
  "message": "User successfully registered"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Username, email, and password are required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

### POST /login

> Login with existing user credentials

_Request Body_

```json
{
  "email": "john@example.com",
  "password": "secretpassword"
}
```

_Response (200 - OK)_

```json
{
  "message": "Login successful",
  "access_token": "your_access_token_here"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email or password"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

### GET /posts

> Retrieve all posts

_Request Header_

```json
{
  "Authorization": "Bearer your_access_token_here"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "title": "Introduction to APIs",
    "content": "APIs are essential for modern software...",
    "author": "john_doe",
    "createdAt": "2023-08-31T10:30:00.000Z",
    "updatedAt": "2023-08-31T11:45:00.000Z"
  },
  {
    "id": 2,
    "title": "Working with Databases",
    "content": "Database interactions are crucial...",
    "author": "jane_smith",
    "createdAt": "2023-08-31T12:15:00.000Z",
    "updatedAt": "2023-08-31T13:30:00.000Z"
  }
]
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

### POST /posts

> Create a new post

_Request Header_

```json
{
  "Authorization": "Bearer your_access_token_here"
}
```

_Request Body_

```json
{
  "title": "Advanced API Usage",
  "content": "Learn advanced techniques for working with APIs..."
}
```

_Response (201 - Created)_

```json
{
  "message": "Post created successfully",
  "postId": 3
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Title and content are required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

### GET /comment/:post_id

> Retrieve comments for a specific post

_Request Header_

```json
{
  "Authorization": "Bearer your_access_token_here"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "postId": 1,
    "author": "jane_smith",
    "content": "Great article!",
    "createdAt": "2023-08-31T14:00:00.000Z",
    "updatedAt": "2023-08-31T14:00:00.000Z"
  },
  {
    "id": 2,
    "postId": 1,
    "author": "john_doe",
    "content": "Thanks for sharing!",
    "createdAt": "2023-08-31T14:30:00.000Z",
    "updatedAt": "2023-08-31T14:30:00.000Z"
  }
]
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

### POST /comment/:post_id

> Add a new comment to a specific post

_Request Header_

```json
{
  "Authorization": "Bearer your_access_token_here"
}
```

_Request Body_

```json
{
  "content": "This is a valuable insight!"
}
```

_Response (201 - Created)_

```json
{
  "message": "Comment added successfully",
  "commentId": 3
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Comment content is required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

---
