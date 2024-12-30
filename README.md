# CRUD Application with Node.js, Express, and MySQL

## Overview
This application is a simple CRUD (Create, Read, Update, Delete) API built using Node.js, Express.js, and MySQL. It demonstrates how to perform basic database operations through HTTP requests.

## Prerequisites
- Node.js and npm installed
- MySQL database server running
- A MySQL client to execute database queries (e.g., MySQL Workbench, phpMyAdmin, or command-line client)

## Setup Instructions

### 1. Install Dependencies
Run the following command to install the required Node.js packages:
```bash
npm install express mysql2
```

### 2. Database Setup
Execute the following SQL commands in your MySQL client to set up the database and table:

```sql
-- Create a new database
CREATE DATABASE newdb;

-- Use the new database
USE newdb;

-- Create a table
CREATE TABLE mytable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    mark INT
);

-- Insert sample data
INSERT INTO mytable (name, mark) VALUES ('B', 50);

-- Retrieve all records
SELECT * FROM mytable;

-- Retrieve a specific record by ID
SELECT * FROM mytable WHERE id = 2;

-- Delete a record by ID
DELETE FROM mytable WHERE id = 2;

-- Update a record by ID
UPDATE mytable SET name = 'Updated Name', mark = 80 WHERE id = 1;
```

### 3. Configure the Application
Make sure the MySQL connection details in the `mysql.createConnection` method match your local database setup:
```javascript
const con = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'root',
     database: 'newdb',
     port: 3308,
});
```

### 4. Run the Application
Start the server by running:
```bash
node app.js
```
The application will listen on port 3300.

## API Endpoints

### 1. POST `/post`
**Description:** Add a single record to the database.
**Request Body:**
```json
{
    "id": 1,
    "name": "John",
    "mark": 85
}
```
**Response:**
```plaintext
POSTED
```

### 2. POST `/postList`
**Description:** Add multiple records to the database.
**Request Body:**
```json
[
    {"id": 1, "name": "John", "mark": 85},
    {"id": 2, "name": "Doe", "mark": 90}
]
```
**Response:**
```plaintext
<Results of each insertion>
```

### 3. GET `/get`
**Description:** Retrieve all records from the database.
**Response:**
```json
[
    {"id": 1, "name": "John", "mark": 85},
    {"id": 2, "name": "Doe", "mark": 90}
]
```

### 4. GET `/getbyid/:id`
**Description:** Retrieve a specific record by its ID.
**Example:** `/getbyid/1`
**Response:**
```json
{
    "id": 1,
    "name": "John",
    "mark": 85
}
```

### 5. DELETE `/delete`
**Description:** Delete a record by its ID.
**Request Body:**
```json
{
    "id": 1
}
```
**Response:**
```plaintext
<Deletion result>
```

### 6. PUT `/update/:id`
**Description:** Update a specific record by its ID.
**Request Body:**
```json
{
    "name": "Updated Name",
    "mark": 90
}
```
**Example:** `/update/1`
**Response:**
```plaintext
UPDATED
```

## Notes
- Make sure the MySQL server is running before starting the application.
- Use tools like Postman or cURL to test the endpoints.

## Contact
For further information or support, feel free to reach out!

