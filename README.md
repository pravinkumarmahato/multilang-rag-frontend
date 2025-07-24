# 🌍 MultiLang RAG Frontend

---

## 📚 Overview

This is the frontend documentation for the **MultiLang RAG (Retrieval-Augmented Generation)** system. It is a multilingual AI chatbot that allows users to:

- Upload documents
- Interact with the system using natural language
- Receive contextual answers

Built using **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, this frontend interfaces with a **FastAPI** backend.

---

## 🔗 Live Demo
- 🌐 Frontend: [https://multilang-rag-frontend.onrender.com](https://multilang-rag-frontend.onrender.com/)
- ⚙️ Backend API (Swagger): [https://multilang-rag-backend.onrender.com/docs](https://multilang-rag-backend.onrender.com/docs)

---

### 📸 Screenshots

### Home/About Page

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5f71762a-638f-4685-915a-15f274ae914d" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5d58285f-21a0-4a46-a8b1-1a4a80dc7b56" />

###Signup Page

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ed8822ab-c861-42f9-ae7a-e97bb9ba66bd" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e8bc40c2-369f-47e9-bcec-2cbfe50a33cd" />

### Login Page

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e206370a-6193-4b1a-9dd3-2b0887071d3f" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c421ceae-6239-4021-8fd1-c07ecae3ed90" />

### Upload Page

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9cb30ceb-d128-47b8-a4cd-96300d4085e0" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1457b012-2096-4e2c-aee7-e2bfdb4d432f" />

### Chat Page

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/80f3b5af-3f81-484e-a318-95f1b619b5ee" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5b4548ce-f1da-442c-a614-78ea4e2fe27e" />

### Profile Page

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/fba89f06-f760-4cea-80da-36f3c9401ef7" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/de4b3df6-968b-47cc-af01-049da8d373a5" />

---

## 💡 Features Summary

- 🔐 JWT-based User Authentication
- 📄 Document Upload & Processing
- 💬 AI Chat with Document Context (RAG)
- 🌗 Light/Dark Theme Support
- 👤 User Profile Management

---

## 🔗 API Integration (Frontend to Backend)

### Auth APIs

| Method | Endpoint       | Description                   |
| ------ | -------------- | ----------------------------- |
| POST   | `/auth/signup` | Registers a new user          |
| POST   | `/auth/token`  | Authenticates & returns token |
| GET    | `/auth/user`   | Fetches user profile          |

### File Upload API

| Method | Endpoint   | Description              |
| ------ | ---------- | ------------------------ |
| POST   | `/upload/` | Uploads document for RAG |

### Chat APIs

| Method | Endpoint        | Description                      |
| ------ | --------------- | -------------------------------- |
| POST   | `/chat/`        | Sends query to RAG engine        |
| GET    | `/chat/history` | Fetches user's past interactions |

---

## 🔧 System Architecture

### 🧠 High-Level Design

```
+-------------------+     +---------------------+     +----------------------+
| React Frontend    | --> | FastAPI Backend     | --> | LangChain + VectorDB |
| (Vite + Tailwind) |     | Auth, Upload, RAG   |     | Embedded Docs        |
+-------------------+     +---------------------+     +----------------------+
```

<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/219da55b-b0bb-40c0-866c-5f643efd75ad" />

---

### 🧩 Low-Level Design

#### 🔐 Authentication Flow

- Signup/Login → `/auth/signup|token`
- Token stored in `localStorage`
- Token validated on every request via Axios interceptor
- Context-based state management (`AuthContext`)

#### 📄 Upload Flow

- File selected → `POST /upload/`
- Displays success/failure message

#### 💬 Chat Flow

- User submits query → `POST /chat/`
- Response appended to UI
- Chat history fetched via `GET /chat/history`

#### 🧑‍💻 Profile

- `GET /auth/user` → shows email & username

---

## 👁 Context API Breakdown

### `AuthContext`

- Stores `token`, `user`
- Provides `loginUser`, `signupUser`, `logout`
- Automatically fetches profile on load

### `ThemeContext`

- Stores current theme (`dark` or `light`)
- Toggles root `classList`
- Used by Navbar and global layout

---

## 📄 Pages Overview

| Page    | Route      | Protected | Purpose                            |
| ------- | ---------- | --------- | ---------------------------------- |
| About   | `/`        | ❌         | Introduction & feature explanation |
| Login   | `/login`   | ❌         | Login form                         |
| Signup  | `/signup`  | ❌         | Registration form                  |
| Upload  | `/upload`  | ✅         | Upload documents                   |
| Chat    | `/chat`    | ✅         | Chat with RAG system               |
| Profile | `/profile` | ✅         | View user info and logout          |

---

## 🎭 UI/UX Design Elements

- Responsive layout (Tailwind-based)
- Glassmorphism Navbar
- Hover/transition animations
- Theme toggle with emoji feedback
- Card-like UI for major sections

---

## 🚀 Deployment Setup

- Vite-powered frontend
- `.env.production` holds API base:

```
VITE_API_BASE_URL=https://multilang-rag-backend.onrender.com/
```

- Optimized for static deployment via **Netlify**, **Vercel**, or **Render**

---

## 📌 Diagram Summary

```
            +---------------+           +---------------------+
            |   React App   |           | FastAPI Backend     |
            | (Browser)     |           | Auth, Upload, RAG   |
            +-------+-------+           +----+-----------+----+
                    |                        |           |
 Signup/Login (POST)|                        |           |
        ↓        Store Token              |   Vector   |
    AuthProvider    -----------------------> |   DB/API   |
     |   |  |                                |           |
     |   |---> Upload File --> /upload/ ---->+           |
     |   |---> Chat Query  --> /chat/  -----------------> |
     |   |---> Get History --> /chat/history <-----------|
     |   '---> Get Profile --> /auth/user   <------------|
```

---

## 🚀 Suggested Enhancements

- Add Markdown/chat formatting (e.g., bold, links)
- Add streaming/chatbot typing effect
- Add document viewer after upload
- Multilingual UI text
- OAuth/Google login

---

## 🙌 Built With

- ⚛️ React + Vite
- 🎨 Tailwind CSS
- 🔐 FastAPI + JWT
- 📚 LangChain for RAG Pipeline
- 🤖 Gemini API for Embeddings + LLM


Developed by **Pravin Kumar Mahato**

