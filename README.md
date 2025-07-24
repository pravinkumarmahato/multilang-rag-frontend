# 🌍 MultiLang RAG Frontend

---

## 📚 Overview

This is the frontend documentation for the **MultiLang RAG (Retrieval-Augmented Generation)** system. It is a multilingual AI chatbot that allows users to:

- Upload documents
- Interact with the system using natural language
- Receive contextual answers

Built using **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, this frontend interfaces with a **FastAPI** backend.

> 📸 *Placeholder for Home Page Screenshot*

---

## 💡 Features Summary

- 🔐 JWT-based User Authentication
- 📄 Document Upload & Processing
- 💬 AI Chat with Document Context (RAG)
- 🌗 Light/Dark Theme Support
- 👤 User Profile Management

> 📸 *Placeholder for Upload & Chat UI Screenshot*

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

> 📸 *Placeholder for System Architecture Diagram*

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

> 📸 *Placeholder for Profile Screenshot*

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

> 📸 *Placeholder for Chat Flow Diagram*

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

