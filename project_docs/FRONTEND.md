# 🧠 Code Guru Backend

This is the Django REST Framework backend for the Code Guru platform. It powers the AI-enhanced challenge engine, tech newsletters, and real-time playground features. Integrated with OpenAI and DeepSeek APIs.

---

## 📁 Project Structure

```
backend/
├── account_app/        # Stores user profile data
├── challenge_app/      # Daily coding challenges, answers, AI validation
├── language/           # Language prompt templates
├── newsletter_app/     # AI-generated daily tech reports
├── playground_app/     # AI code Q&A for any language/problem
├── user_app/           # Custom user model and auth
├── code_guru_proj/     # Django settings, URL config
├── manage.py
└── requirements.txt
```

---

## 🔐 Authentication

- Token-based auth via `rest_framework.authentication.TokenAuthentication`
- Extend `TokenReq` to protect endpoints and auto-load `request.auth.user.account`

---

## 🔗 API Endpoints

### Challenge API

| Method | URL                                  | Description                                |
|--------|---------------------------------------|--------------------------------------------|
| GET    | `/api/v1/challenge/html/<date>/`     | Get or generate AI-based challenge         |
| PUT    | `/api/v1/challenge/answer/`          | Submit user code & validate with AI        |
| GET    | `/api/v1/challenge/answer/`          | Return solved challenges by the user       |

### Newsletter API

| Method | URL                                  | Description                                |
|--------|---------------------------------------|--------------------------------------------|
| GET    | `/api/v1/newsletter/<date>/`         | Get AI-generated newsletter (JSX format)   |

### Playground API

| Method | URL                                  | Description                                |
|--------|---------------------------------------|--------------------------------------------|
| PUT    | `/api/v1/playground/answer/`         | Ask a custom code question (AI response)   |

---

## 🧱 Models Overview

### `Challenge`
Stores all metadata and JSX-renderable content for a challenge.

- `date`, `questionLink`, `questionTitle`, `difficulty`
- `question`, `html`
- `input_J`, `output_J`, `input_P`, `output_P`

### `Answer`
User’s submitted solution to a challenge.

- Foreign keys: `account`, `challenge`
- `code`, `language`, `solve`

### `Newsletter`
Daily AI-written newsletter.

- `date`, `html` (Tailwind JSX)

---

## 🧠 AI Integration

### DeepSeek (HTML → JSX)

- Converts raw LeetCode HTML into Tailwind-compatible JSX for React frontend

### OpenAI GPT-4.1

- Generates example input/output
- Validates user solutions against expectations
- Answers user questions in playground
- Writes tech newsletters

---

## ⚙️ Setup

```bash
# Create virtual env
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
touch .env

#
