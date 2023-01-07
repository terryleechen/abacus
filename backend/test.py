import os
from fastapi import FastAPI
from typing import Optional, List
from dotenv import load_dotenv
from pymongo import MongoClient
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import motor.motor_asyncio

from models import Car

app = FastAPI()

load_dotenv()
MONGODB_URI = os.environ["MONGODB_URI"]
#client = MongoClient()
client = motor.motor_asyncio.AsyncIOMotorClient()
db = client["inventory"]
cars_collection = db.get_collection("cars")
"""client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGODB_URI"])
db = client.inventory"""

@app.on_event("startup")
async def startup_event():
    # Load config from a .env file:
    load_dotenv()
    MONGODB_URI = os.environ["MONGODB_URI"]
    client = MongoClient(MONGODB_URI)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
    print("Disconnected from the MongoDB database!")   


@app.get("/", tags=["Root"])
async def read_root():
   print(client)
   return {"message": "Welcome to this fantastic app!"}



@app.get("/cars/",response_description="List all cars",response_model=List[Car])
async def get_car():
    cars = await db["cars"].find().to_list(1000)
    return cars

    
    
   



"""@app.post("/cars/", response_model=Car)
async def create_car(car: Car):
    return car
"""