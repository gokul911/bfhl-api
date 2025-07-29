# 🧠 BFHL API - Chitkara Campus Hiring (July 2025)

This is a full stack API submission for the Chitkara University Campus Hiring Challenge - July 2025. The objective is to build and deploy a RESTful API that processes a given array and returns structured data based on types and custom transformations.

---

## 📌 Objective

Build and host a `POST` API at route `/bfhl` that accepts an array and returns:

- ✅ Status of the operation (`is_success`)
- 🧑‍💻 `user_id` (format: `fullname_ddmmyyyy`)
- 📧 `email`
- 🎓 `roll_number`
- 🔢 `even_numbers` and `odd_numbers` (as strings)
- 🔠 `alphabets` (converted to uppercase)
- ❗ `special_characters`
- ➕ `sum` of numbers (as string)
- 🔁 `concat_string`: reverse of all alphabet characters with alternating caps

---

## 🧪 Sample Request

```json
POST /bfhl
Content-Type: application/json

{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## ✅ Sample Response

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

---

## 🛠️ Tech Stack

* **Language**: Node.js
* **Framework**: Express (for local development)
* **Deployment**: Vercel (Serverless Functions)
* **Version Control**: Git + GitHub

---

## 🚀 Deployment Instructions (Using Vercel)

### 1. Project Setup

```bash
mkdir bfhl-api
cd bfhl-api
npm init -y
npm install express
```

### 2. File Structure

```
bfhl-api/
├── index.js
├── package.json
└── vercel.json
```

### 3. vercel.json

```json
{
  "version": 2,
  "builds": [
    { "src": "index.js", "use": "@vercel/node" }
  ],
  "routes": [
    {
      "src": "/bfhl",
      "methods": ["POST"],
      "dest": "/index.js"
    }
  ]
}
```

### 4. Deploy to Vercel

* Go to [vercel.com](https://vercel.com/)
* Import your GitHub repo
* Deploy the project
* Your API will be live at:

```
https://your-vercel-project-name.vercel.app/bfhl
```

---

## 📂 Submission Checklist

* [x] API hosted publicly
* [x] `/bfhl` route implemented
* [x] Code pushed to public GitHub repo
* [x] Output matches the required format
* [x] Only POST method is supported

---

## 🧑 Author Info

* **Name**: PN Gokul
* **Email**: [pngokul08764@gmail.com](pngokul08764@gmail.com)
* **Roll Number**: 2210990629

---
