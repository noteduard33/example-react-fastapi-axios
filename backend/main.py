from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

fake_db = {
    1: 'Alex',
    2: 'David',
    3: 'Max'
}

class UserBase(BaseModel):
    index: int
    username: str

@app.get("/")
async def root():
    return {'data': fake_db}

@app.post("/create_user")
async def create_new_user(new_user: UserBase):
    fake_db[new_user.index] = new_user.username
    return {'data': fake_db}