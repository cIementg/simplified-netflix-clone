# Simplified Netflix Clone

This project is a simplified version of Netflix, built as an educational project. It provides basic streaming platform functionalities with a modern user interface inspired by Netflix.

## Project Structure

The project is divided into two main parts:

- `api/` : Spring Boot Backend
- `frontend/` : React Frontend

## Prerequisites

- Java 17 or higher
- Node.js 16 or higher
- Maven
- MySQL

## Installation and Setup

### Backend (API)

1. Navigate to the api folder:
```bash
cd api
```

2. Install dependencies with Maven:
```bash
./mvnw clean install
```

3. Start the application:
```bash
./mvnw spring-boot:run
```

The API will be available at `http://localhost:8080`

### Frontend

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the application:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Key Features

- Browse movies by categories
- Admin interface for movie and category management
- Responsive design inspired by Netflix
- RESTful API for data management
- Simplified streaming platform functionality

## Technologies Used

### Backend
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

### Frontend
- React
- Tailwind CSS
- Axios for HTTP requests

## Project Scope

This is an educational project that implements a simplified version of Netflix. While it mimics some of Netflix's core features, it is not intended to be a full-scale streaming platform. The project focuses on demonstrating fundamental concepts of full-stack development, including:

- REST API development
- Database management
- Frontend-Backend integration
- Modern UI/UX principles
- Authentication and authorization basics 