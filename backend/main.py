import os, json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from dotenv import load_dotenv

load_dotenv()

ADMIN_USER=os.getenv('USERNAME')
ADMIN_PASS=os.getenv('PASSWORD')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://127.0.0.1:3000', 'http://localhost:3000'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

@app.get("/")
def read_root():
    return 'Home'

@app.post("/authenticate")
def check_admin(username: str, password: str):
    if username == ADMIN_USER and password == ADMIN_PASS:
        return jsonable_encoder('Authenticated!')
    
    return 'NOT ADMIN'

