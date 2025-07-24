# FastAPI Email Service

A production-ready Python FastAPI microservice for sending emails, as an alternative to EmailJS. Can be deployed to AWS ECS Fargate (see `infrastructure/src`).

## Setup

### 1. Create and Activate a Python Virtual Environment

It's recommended to use a virtual environment to manage dependencies:

```sh
# Create a virtual environment (replace .venv with your preferred name)
python -m venv .venv

# Activate the virtual environment
# On Windows:
.venv\Scripts\activate
# On macOS/Linux:
source .venv/bin/activate
```

### 2. Install Dependencies

```sh
pip install -r requirements.txt
```

### 3. Configure Environment Variables

## Environment Variables Example (`.env`)
```
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=your@email.com
SMTP_PASS=yourpassword
SMTP_FROM=your@email.com
```

### 4. Run the Service (Locally)

```sh
uvicorn app.main:app --host localhost --port 8080
```

### 5. (Optional) Build and Run with Docker

```sh
docker build -t fastapi-email-service ./fastapi-email-service
docker run --env-file ./fastapi-email-service/.env -p 8080:80 fastapi-email-service
```

## API

- `POST /send-email`
  - JSON body: `{ "to": "recipient@email.com", "subject": "Subject", "message": "<html>Message</html>" }`
  - Returns: `{ "success": true, "message": "Email sent" }` on success.

## Switching Email Providers in React

- The frontend can switch between EmailJS and the FastAPI backend by setting an environment variable (e.g., `REACT_APP_EMAIL_PROVIDER=emailjs` or `REACT_APP_EMAIL_PROVIDER=fastapi`).
- The Contact form logic will check this variable and use the appropriate send method. 