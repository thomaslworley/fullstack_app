import os, json
from fastapi import FastAPI
from dotenv import load_dotenv

load_dotenv()

ADMIN_USER=os.getenv('USERNAME')
ADMIN_PASS=os.getenv('PASSWORD')

app = FastAPI()

@app.get("/")
def read_root():
    return 'Home'

@app.post("/authenticate")
def check_admin(username: str, password: str):
    if username == ADMIN_USER and password == ADMIN_PASS:
        return 'Authenticated!'
    
    return 'NOT ADMIN'

