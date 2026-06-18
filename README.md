# Contact API

A RESTful Contact Management API built with Node.js, Express.js, MongoDB, and JWT Authentication. The API allows users to register, log in, and manage
their contacts securely.

## Features

* User Registration
* User Login
* JWT Authentication
* Create Contact
* Get All Contacts
* Get Contact by ID
* Update Contact
* Delete Contact
* Protected Routes

## Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (JSON Web Token)
* bcryptjs

## Project Structure

```text
Contact_API/
│
├── Controllers/
│   ├── contact.js
│   └── user.js
│
├── Middlewares/
│   └── Auth.js
│
├── Models/
│   ├── Contact.js
│   └── User.js
│
├── Routes/
│   ├── contact.js
│   └── user.js
│
├── .env
├── server.js
└── package.json
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_secret_key
```

4. Start the server

```bash
npm start
```

## API Endpoints

### User Routes

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| POST   | /api/users/register | Register User    |
| POST   | /api/users/login    | Login User       |

### Contact Routes

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | /api/contacts     | Get All Contacts  |
| POST   | /api/contacts     | Create Contact    |
| GET    | /api/contacts/:id | Get Contact By ID |
| PUT    | /api/contacts/:id | Update Contact    |
| DELETE | /api/contacts/:id | Delete Contact    |

## Testing

Use Postman to test the API endpoints.

## Future Improvements

* Email Verification
* Password Reset
* Contact Search
* Pagination
* Role-Based Access Control

## Author

Avinash Mutum

B.Tech Student
