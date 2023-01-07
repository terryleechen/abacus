from fastapi import APIRouter, Body, Request, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from typing import Optional, List
from models import Car, Branch, CarType, Employee, Customer, Reservation

router = APIRouter()

@router.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}
"""
Cars API

  
"""
@router.get("/cars", response_description="List all cars", response_model=List[Car])
async def get_cars(branch_id: str, supervisor: bool, request: Request):
    if(supervisor):
        cars = list(request.app.db["cars"].find({"BranchID": branch_id}))
        return cars
    else:
        raise HTTPException(status_code=404, detail=f"A supervisor is required to available cars")

@router.get("/cars/{id}", response_description="Get a single car", response_model=Car)
async def get_car(CarID: str, request: Request):
    if (car := request.app.db["cars"].find_one({"CarID": CarID})) is not None:
        return car

    raise HTTPException(status_code=404, detail=f"Car {CarID} not found")

"""
Cars API

  
"""
@router.get("/branches", response_description="List all branches", response_model=List[Branch])
async def get_branches(request: Request):
    branches = list(request.app.db["branches"].find())
    return branches

"""
Cars API

  
"""
@router.get("/carTypes", response_description="List all car types", response_model=List[CarType])
async def get_carTypes(request: Request):
    carTypes = list(request.app.db["carType"].find())
    return carTypes

"""
Employees API

  
"""
@router.get("/employees/{branch_id}", response_description="List all employees", response_model=List[Employee])
async def get_employees(branch_id: str, request: Request):
    employees = list(request.app.db["employees"].find({"BranchID": branch_id, "Supervisor": False}))
    return employees

@router.get("/employee/employeeID={id}", response_description="find an employee", response_model=Employee)
async def get_employee(EmployeeID: str, request: Request):
    if (employee := request.app.db["employees"].find_one({"EmployeeID": EmployeeID})) is not None:
        return employee
    
    raise HTTPException(status_code=404, detail=f"Car {CarID} not found")

"""
Customers API

  
"""
@router.get("/customers", response_description="List all customers", response_model=List[Customer])
async def get_customers(request: Request):
    customers = list(request.app.db["customers"].find())
    return customers

@router.get("/customer/driver_license={driver_license}", response_description="find a customer using driver license", response_model=List[Customer])
async def get_customer(driver_license: str, request: Request):
    if (customers := list(request.app.db["customers"].find({"DriverLicense": driver_license}))) is not None:
        return customers
    
    raise HTTPException(status_code=404, detail=f"Customer {driver_license} not found")