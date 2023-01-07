import os
import uvicorn
from fastapi import FastAPI
from pymongo import MongoClient
from fastapi.middleware.cors import CORSMiddleware
from routers import router

app = FastAPI()

@app.on_event("startup")
async def startup():
    app.client =  MongoClient()
    app.db =  app.client["inventory"]

    #allow cors
    origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    ]
    origins = ["*"]

    app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
    print("Connected to the MongoDB database!")

@app.on_event("shutdown")
async def shutdown():
    app.client.close()
    print("Disconnected from the MongoDB database!")

app.include_router(router)

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host ="127.0.0.1",
        port = 8000,
        reload= True,
    )