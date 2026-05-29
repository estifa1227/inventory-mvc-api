# Inventory MVC API

A simple and scalable **Inventory Management REST API** built using Node.js and Express.
This project demonstrates clean MVC architecture with separation of concerns using models, controllers, and routes.

---

## Features

* Full CRUD operations for Products
* Manage Categories
* Manage Suppliers
* Clean MVC folder structure
* RESTful API design
* JSON-based requests and responses

---

## Tech Stack

* Node.js
* Express.js

---

## 📁 Project Structure

```
inventory-mvc-api/
│
├── controllers/
├── models/
├── routes/
├── server.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/estifa1227/inventory-mvc-api.git
```

### 2. Move into project folder

```bash
cd inventory-mvc-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the server

```bash
node server.js
```

Server runs on:

```
http://localhost:3000
```

---

##  API Endpoints

### Products

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| GET    | /products     | Get all products  |
| GET    | /products/:id | Get product by ID |
| POST   | /products     | Create product    |
| PUT    | /products/:id | Update product    |
| DELETE | /products/:id | Delete product    |

---

### Categories

| Method | Endpoint    | Description        |
| ------ | ----------- | ------------------ |
| GET    | /categories | Get all categories |
| POST   | /categories | Create category    |

---

### Suppliers

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /suppliers | Get all suppliers |
| POST   | /suppliers | Create supplier   |

---

##  Example Request

### Create Product

```json
{
  "name": "Burger",
  "price": 250,
  "categoryId": 1,
  "supplierId": 1
}
```

---

##  What I Learned

* Building REST APIs with Express
* MVC architecture design
* Handling HTTP requests (GET, POST, PUT, DELETE)
* Using req.params and req.body
* Structuring scalable backend projects

---

##Author

**Estifanos Defaru**
Backend Developer (Learning Journey)

---

## ⭐ Future Improvements

* Add MongoDB or MySQL database
* Add authentication (JWT)
* Add validation middleware
* Deploy to cloud (Render / Vercel)
