# React User Management App

This is a React-based user management application that allows users to view, create, and edit user details. The application interacts with a dummy API provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com) to simulate user management operations.

👉 Live Demo: <a href='https://nishant96089.pythonanywhere.com/'>ChatRoom</a>

## Features

- **View Users:** Display a list of users with their details.
- **Create User:** Form to add a new user.
- **Edit User:** Form to update existing user details.
- **Delete User:** Remove a user from the list.
- **Pagination:** Show more users with a "Show More" button.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React Router DOM:** For handling routing and navigation.
- **Axios:** For making HTTP requests.
- **CSS:** For styling the application.

## Getting Started

To get started with the application, follow these steps:

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/react-user-management-app.git
   cd react-user-management-app

2. **Install Dependencies**

   ```bash
   npm install


### Running the Application

1. **Start the Development Server**

   ```bash
   npm run dev

The application will be running at http://localhost:5173  

### Usage

1. View Users: Navigate to the root URL (/) to see the list of users.
2. Create User: Click the "Create User" button to open a form where you can add a new user.
3. Edit User: Click the "Edit" button next to a user to update their details.
4. Delete User: Click the "Delete" button next to a user to remove them from the list.
5. Show More Users: Click the "Show More Users" button to display additional users.

### API Endpoints

The application interacts with the following endpoints of the JSONPlaceholder API:

GET /users: Retrieve the list of users.
POST /users: Create a new user.
PUT /users/:id: Update user details.
DELETE /users/:id: Delete a user.

### Error Handling

The application displays error messages for failed API requests and user actions. These errors will be visible in the user interface and in the browser's console.






