# GROUP-I Exam API

This project implements an Exam Management API using Express and TypeScript.

## 📌 Contributors and Features

| Contributor | Feature |
|-------------|------------------------------------------------|
| Mahawan   | Added `GET /exams` endpoint (returns a hardcoded list of exams). |
| Mahinay   |added `POST /exams` endpoint (adds a new exam to an array). |
| Auman   |Added `PUT /exams/:id` endpoint (updates an existing exam). |

---

## 📖 API Documentation

### 1️⃣ Get All Exams
**Endpoint:** `GET /api/exams`  
**Description:** Retrieves a list of all exams.  
**Response:**
```json
[
  { "id": 1, "name": "Math Exam", "date": "2025-03-30" },
  { "id": 2, "name": "Science Exam", "date": "2025-04-02" }
]
