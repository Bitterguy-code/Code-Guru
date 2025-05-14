# 🧠 Code Guru Backend

This is the Django backend for the Code Guru platform. It powers AI-enhanced coding challenges, newsletters, and a real-time coding playground using RESTful APIs, DeepSeek, and OpenAI GPT-4.1.

---

## 📁 Project Structure

```
backend/
├── user_app/           # Custom user model + token auth
├── account_app/        # User profile: position, goals, years
├── challenge_app/      # Daily challenges, answers, AI validation
├── newsletter_app/     # Daily AI-generated newsletters
├── playground_app/     # Ask AI about any code/question
├── language/           # Prompt templates per language
├── code_guru_proj/     # Django settings and URLs
├── code_guru_data_v1.json  # Full database dump
├── manage.py
└── requirements.txt
```

---

## 🔐 Authentication

- Uses `TokenAuthentication` (via Django REST Framework)
- Any view that inherits from `TokenReq` requires login
- Authenticated user account is accessible via:  
  ```python
  request.auth.user.account
  ```

---

## 🔗 API Endpoints

### 🔹 Challenge API

| Method | URL                                  | Description                                |
|--------|---------------------------------------|--------------------------------------------|
| GET    | `/api/v1/challenge/html/<date>/`     | Get AI challenge for a specific date       |
| PUT    | `/api/v1/challenge/answer/`          | Submit & validate an answer using AI       |
| GET    | `/api/v1/challenge/answer/`          | List user's solved challenges              |

### 🔹 Newsletter API

| Method | URL                            | Description                          |
|--------|--------------------------------|--------------------------------------|
| GET    | `/api/v1/newsletter/<date>/`  | Get AI-generated JSX newsletter      |

### 🔹 Playground API

| Method | URL                            | Description                              |
|--------|--------------------------------|------------------------------------------|
| PUT    | `/api/v1/playground/answer/`   | Ask AI a question about your code        |

---

## 🧱 Models Overview

### `Challenge`
Stores daily coding challenge info and AI-transformed JSX.

```python
date: DateTimeField
questionLink, questionTitle, difficulty: CharField
question: Raw HTML string from API
html: Tailwind JSX from DeepSeek
input_J/output_J: Sample input/output for JavaScript
input_P/output_P: Sample input/output for Python
```

### `Answer`
User’s solution to a `Challenge`.

```python
account: FK to user Account
challenge: FK to Challenge
code: Submitted code (Text)
language: "python" or "javascript"
solve: Boolean indicating correctness
```

### `Newsletter`
AI-generated daily tech update.

```python
date: DateTimeField
html: JSX-styled newsletter from GPT-4.1
```

---

## 🔧 Key Views & Functions

### `DailyChallenge`
- Cleans HTML → JSX using DeepSeek
- Extracts I/O with GPT-4.1
- Saves the challenge if not already in DB

### `DailyAnswer`
- Validates user-submitted code using GPT-4.1
- Saves answer and marks `solve=True` if correct

### `DailyNewsletter`
- Prompts GPT-4.1 to generate a styled JSX newsletter for a date

### `Playground`
- Receives code, language, and a question
- GPT-4.1 returns JSX explanation

---

## 🧠 AI Services

- **DeepSeek**: Converts HTML → JSX for frontend rendering
- **OpenAI GPT-4.1**: Validates answers, extracts input/output, answers playground queries, and writes newsletters

---

## ⚙️ Environment Setup

### 🧰 Step-by-Step Setup

```bash
# 1. Clone the repository and enter the backend folder
cd backend/

# 2. Create a virtual environment
python -m venv venv
source venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Set up your .env file
touch .env
```

### 🛠️ Example `.env` file

```
SECRET_KEY=your-django-secret-key
OPENAI_API_KEY=your-openai-api-key
MY_API_KEY=your-deepseek-api-key
```

### 🗃️ Load Full Database (Optional)

If you want to prepopulate the database with all historical data from `code_guru_data_v1.json`, run:

```bash
# Run migrations first
python manage.py migrate

# Load the full database dump
python manage.py loaddata code_guru_data_v1.json
```

This will populate all models: `Challenge`, `Answer`, `Account`, `Newsletter`, etc.

### ▶️ Run Server

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000` to start accessing the API.

---

## ✅ Dev Tips

- Move long prompt strings to `prompts.py`
- Refactor AI logic into `utils/ai.py`
- Replace `print()` with Python `logging`
- Add pagination and filters for listing endpoints
- Write unit tests for views and serializers

---

## 📄 License

MIT (or your preferred license)
