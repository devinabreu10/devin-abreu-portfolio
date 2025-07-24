from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from .email_utils import send_email

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmailRequest(BaseModel):
    to: EmailStr
    subject: str
    message: str

@app.post("/send-email")
def send_email_endpoint(email: EmailRequest):
    try:
        send_email(email.to, email.subject, email.message)
        return {"success": True, "message": "Email sent"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 