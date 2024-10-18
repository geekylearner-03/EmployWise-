# ReqRes User Management Application

This is a React-based user management application that integrates with the ReqRes API. The application provides functionalities for user authentication, listing users, editing user details, and deleting users.

## Features

- User Authentication
- List of Users with Pagination
- Edit User Details
- Delete User Functionality
- Responsive Design

## Table of Contents

- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Assumptions and Considerations](#assumptions-and-considerations)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can view the live demo of the application at [employ-wise-rho.vercel.app](https://employ-wise-rho.vercel.app).

## Technologies Used

- React
- Tailwind CSS
- Axios
- React Router (for navigation)
- Git & GitHub

## Installation

To install the necessary dependencies for this project, follow these steps:

1. **Clone the Repository**:
    Open your terminal and run:
    ```bash
    git clone https://github.com/geekylearner-03/EmployWise-.git
    cd your-repository
    ```

2. **Install Dependencies**:
    Run the following command to install the required packages:
    ```bash
    npm install
    ```

## Running the Application

To run the application locally, follow these steps:

1. Ensure that you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

2. Start the application by running:
    ```bash
    npm start
    ```
   This will start the development server, and you can access the application in your browser at `http://localhost:3000`.

## API Endpoints

The application interacts with the following API endpoints:

- **Login**
  - **POST** `/api/login` 
    - Request Body:
      ```json
      {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      }
      ```

- **Fetch Users**
  - **GET** `/api/users?page=1`

- **Update User**
  - **PUT** `/api/users/{id}`

- **Delete User**
  - **DELETE** `/api/users/{id}`

## Assumptions and Considerations

- The application assumes that the ReqRes API will be available and responsive.
- User input validation is implemented, but it may not cover all edge cases.
- The application is designed to be responsive and should work well on both mobile and desktop devices.
- Error handling is included for API requests to provide feedback to users.
- The user authentication is based on the given credentials, which are hardcoded for demonstration purposes.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss any improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
