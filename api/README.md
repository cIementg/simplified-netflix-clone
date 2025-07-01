# Simplified Netflix Clone API

REST API developed with Spring Boot to manage movies and categories for a simplified Netflix-like platform.

## Configuration

Application configuration can be found in `src/main/resources/application.properties`.

## API Structure

### Movie Endpoints

- `GET /api/movies` : Retrieve all movies
- `GET /api/movies/{id}` : Retrieve a movie by ID
- `POST /api/movies` : Create a new movie
- `PUT /api/movies/{id}` : Update a movie
- `DELETE /api/movies/{id}` : Delete a movie

### Category Endpoints

- `GET /api/categories` : Retrieve all categories
- `GET /api/categories/{id}` : Retrieve a category by ID
- `POST /api/categories` : Create a new category
- `PUT /api/categories/{id}` : Update a category
- `DELETE /api/categories/{id}` : Delete a category

## Database

The application uses MySQL as its database. Schema and initial data are defined in `src/main/resources/data.sql`.

## Development

To run the application in development mode:

```bash
./mvnw spring-boot:run
```

To build the application:

```bash
./mvnw clean package
```

## Testing

To run tests:

```bash
./mvnw test
```

## API Scope

This API is designed for educational purposes and implements core features of a streaming platform in a simplified way. It includes:

- Basic CRUD operations for movies and categories
- Simple data model with essential fields
- Basic error handling and validation
- RESTful architecture principles

Note: This is not intended to be a production-ready streaming service API, but rather a learning tool for understanding API development with Spring Boot. 