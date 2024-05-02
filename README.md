# Leave Management System - Frontend

This is the frontend project for the Leave Management System, developed using JavaScript with React and Vite, along with Tailwind CSS for styling. It provides a user-friendly interface for managing employee leaves efficiently.

## Features

- User-friendly interface built with React
- Fast development environment provided by Vite
- Responsive design using Tailwind CSS
- Integration with Firebase Storage for uploading images

## Technologies Used

- JavaScript
- React
- Vite
- Tailwind CSS
- Firebase Storage

##Screenshots


<img src="./frontend/Screenshots/1.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;
<img src="./frontend/Screenshots/2.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;
<img src="./frontend/Screenshots/3.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;
<img src="./frontend/Screenshots/4.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;
<img src="./frontend/Screenshots/5.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;
<img src="./frontend/Screenshots/6.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;
<img src="./frontend/Screenshots/7.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;
<img src="./frontend/Screenshots/8.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;
<img src="./frontend/Screenshots/9.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;
<img src="./frontend/Screenshots/10.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;

## Usage

- Use the interface to perform various actions related to leave management such as creating leave requests, viewing employee leaves, etc.
- Utilize the upload functionality to upload images for leave requests, which will be stored in Firebase Storage.

## Folder Structure

- `src/`: Contains the source code of the application.
  - `components/`: Reusable React components.
  - `pages/`: React components representing different pages/routes of the application.
  - `context/`: Defines context to be used throughout the application.
  - `utils/`: Utility functions.



# Leave Management System - Backend

This Leave Management System Backend is developed in Java using Spring Boot framework. It provides functionalities for managing employee leaves efficiently. The system utilizes JWT token for authentication and MySQL database to store employee information.

## Features

- Authentication using JWT token
- MySQL database for storing data
- CRUD operations for the following entities:
    - Employee
    - Leave Request
    - Leave Request Type
    - Department
    - Login Request
    - Login Response
    - Company Holiday
- Controllers for handling various operations:
    - Auth
    - CompanyHoliday
    - Department
    - Employee
    - LeaveRequest
    - LeaveType
- Spring Security for protecting most endpoints from unauthorized access
- Lombok used to generate class constructors, getters, and setters

## Technologies Used

- Java
- Spring Boot
- JWT (JSON Web Token)
- MySQL
- Lombok

## API Endpoints

<img src="./backend/Screenshots/1.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;
<img src="./backend/Screenshots/2.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;
<img src="./backend/Screenshots/2.png?raw=true" style="width: 100%;margin:16px;" />&nbsp;&nbsp;

## Authentication

- The majority of endpoints are protected from unauthorized access using Spring Security.
- To access protected endpoints, include the JWT token obtained after successful login in the Authorization header of your HTTP requests.
