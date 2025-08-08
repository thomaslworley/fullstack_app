from typing import Union

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return 'Home'

@app.get("/authenticate")
def read_root():
    return 'Authenticating'

