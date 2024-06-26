# PostgreSQL Learning Repository

Welcome to my PostgreSQL learning repository! This repository is dedicated to documenting my journey as I learn and explore PostgreSQL, a powerful, open-source object-relational database system.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Basic Commands](#basic-commands)
- [Learning Resources](#learning-resources)
- [Projects](#projects)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository contains my notes, code samples, and projects as I learn PostgreSQL. PostgreSQL is known for its robustness, extensibility, and standards compliance, making it a popular choice for developers and organizations.

## Installation

### Prerequisites

- Operating System: Windows, macOS, or Linux
- [PostgreSQL](https://www.postgresql.org/download/)
- [pgAdmin](https://www.pgadmin.org/download/) (optional but recommended for GUI-based management)

### Steps

1. Download PostgreSQL from the [official website](https://www.postgresql.org/download/) and follow the installation instructions for your operating system.
2. (Optional) Download and install [pgAdmin](https://www.pgadmin.org/download/) for a graphical interface to manage your databases.

## Basic Commands

Here are some basic commands to get started with PostgreSQL:

### Starting the PostgreSQL Service

```sh
# On Linux
sudo service postgresql start

# On macOS
brew services start postgresql

# On Windows
# Start the PostgreSQL server from the Services app or using pgAdmin

Accessing the PostgreSQL Shell
psql -U your_username -d your_database

Common SQL Commands

-- Create a new database
CREATE DATABASE mydatabase;

-- List all databases
\l

-- Connect to a database
\c mydatabase

-- Create a new table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

-- Insert data into a table
INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');

-- Query data from a table
SELECT * FROM users;

-- Update data in a table
UPDATE users SET email = 'new.email@example.com' WHERE name = 'John Doe';

-- Delete data from a table
DELETE FROM users WHERE name = 'John Doe';


```
## Learning Resources

Here are some resources I've found helpful:

- [Official PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [Learn PostgreSQL on Codecademy](https://www.codecademy.com/learn/learn-sql)
- [PostgreSQL Exercises](https://pgexercises.com/)

## Projects

### Project 1: Basic CRUD Operations

**Description:** A simple project to perform Create, Read, Update, and Delete operations on a PostgreSQL database.

### Project 2: Reading CSV File and making Simple Quiz Application

**Description:** Building a basic Quiz platform with PostgreSQL as the backend database.

<img width="1710" alt="Screenshot 2024-06-27 at 12 13 37 AM" src="https://github.com/Ravichandra89/PostgreSQL/assets/134200599/2cf8f91b-06b7-4aeb-bd0d-eb18439853ab">

