import smtplib
from email.mime.text import MIMEText
from .config import SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM

def send_email(to, subject, message):
    msg = MIMEText(message, "html")
    msg["Subject"] = subject
    msg["From"] = SMTP_FROM
    msg["To"] = to

    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(SMTP_FROM, [to], msg.as_string()) 