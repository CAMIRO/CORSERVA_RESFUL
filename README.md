# CRUD REST API with Node.js, Express, PostgreSQL, Sequelize, and Docker

This repository contains a RESTful API built using Node.js, Express, PostgreSQL, Sequelize, and Docker. The API provides endpoints to perform CRUD operations on items.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- Node.js and npm
- Docker
- PostgreSQL

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/CAMIRO/CORSERVA_RESFUL
2. Install the dependencies:
   ```bash  
   npm install
3. Set up your PostgreSQL database. Update the database configuration in `util/database.js` according to your PostgreSQL settings.
4. Start the PostgreSQL database:
    ```bash  
   docker compose up -d node_db
5. Run the migrations to create the necessary database tables:
    ```bash  
    npx sequelize-cli db:migrate
6. Or create a new db from scratch:
    ```bash  
   docker compose build
7. Finally, run it with:
    ```bash  
   docker compose up
    

## Endpoints






