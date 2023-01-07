import uuid
from typing import Optional
from pydantic import BaseModel, Field
#from bson import ObjectId


class Car(BaseModel):
    CarID: str = Field(...)
    BranchID: str = Field(...)
    Make: str = Field(...)
    Model: str = Field(...)
    Year: int = Field(...)
    Color: str = Field(...)
    FuelType: str = Field(...)
    LicensePlate: str = Field(...)
    Status: str = Field(...)
    Mileage: int = Field(...)

    class config:
        allow_population_by_field_name = True
        artitrary_types_allowed = True
        #json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "CarID": "CR00001",
                "BranchID": "B001",
                "Make": "Toyota",
                "Model": "Camry",
                "Year": 2010,
                "Color": "Blue",
                "FuelType": "Gas",
                "LicensePlate": "ABC123",
                "Status": "Available",
                "Mileage": 1000
            }
        }

class CarType(BaseModel):
    TypeID: str = Field(...)
    Description: str = Field(...)
    DailyCost: float = Field(...)
    WeeklyCost: float = Field(...)
    MonthlyCost: float = Field(...)
    LateFee: float = Field(...)
    ChangeBranchFee: float = Field(...)
    
    class config:
        allow_population_by_field_name = True
        artitrary_types_allowed = True
        #json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "TypeID": "T1",
                "Description": "Sedan",
                "DailyCost": 50.00,
                "WeeklyCost": 300.00,
                "MonthlyCost": 1000.00,
                "LateFee": 10.00,
                "ChangeBranchFee": 50.00
            }
        }

class Branch(BaseModel):
    BranchID: str = Field(...)
    Name: str = Field(...)
    Address: str = Field(...)
    City: str = Field(...)
    Province: str = Field(...)
    PostalCode: str = Field(...)
    Phone: str = Field(...)
    Email: str = Field(...)

    class config:
        allow_population_by_field_name = True
        artitrary_types_allowed = True
        #json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "BranchID": "B001",
                "Name": "Edmonton #001",
                "Address": "123 Main St",
                "City": "Edmonton",
                "Province": "AB",
                "PostalCode": "T0T 0T0",
                "Phone": "415-555-5555",
                "Email": "branch.name.@gmail.com",
            }
        }

class Customer(BaseModel):
    CustomerID: str = Field(...)
    FirstName: str = Field(...)
    LastName: str = Field(...)
    DriverLicense: str = Field(...)
    Email: str = Field(...)
    DOB: str = Field(...)
    GoldStatus: bool = Field(...)
    Address: str = Field(...)
    Province: str = Field(...)
    City: str = Field(...)
    PostalCode: str = Field(...)

    class config:
        allow_population_by_field_name = True
        #json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "CustomerID": "C0000000001",
                "FirstName": "John",
                "LastName": "Smith",
                "DriverLicense": "123456",
                "Email": "first.last@gmail.com",
                "DOB": "01/01/1990",
                "GoldStatus": False,
                "Address": "123 Main St",
                "Province": "AB",
                "City": "Calgary",
                "PostalCode": "T2P 2T2"
                }    
        }    
        
class Employee(BaseModel):
    EmployeeID: str = Field(...)
    FirstName: str = Field(...)
    LastName: str = Field(...)
    BranchID: str = Field(...)
    Email: str = Field(...)
    DOB: str = Field(...)
    Address: str = Field(...)
    Province: str = Field(...)
    City: str = Field(...)
    PostalCode: str = Field(...)
    HireDate: str = Field(...)
    Supervisor: bool = Field(...)

    class config:
        allow_population_by_field_name = True
        #json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "EmployeeID": "E0000000001",
                "FirstName": "John",
                "LastName": "Smith",
                "BranchID": "B001",
                "Email": "first.last@gmail.com",
                "DOB": "01/01/1990",
                "Address": "123 Main St",
                "Province": "AB",
                "City": "Calgary",
                "PostalCode": "T2P 2T2",
                "HireDate": "01/01/2020",
                "JobTitle": "Manager",
                "Supervisor": True
            }
        }

class Reservation(BaseModel):
    ReservationID: str = Field(...)
    CustomerID: str = Field(...)
    CarType: str = Field(...)
    CarID: str = Field(...)
    BranchID: str = Field(...)
    StartDate: str = Field(...)
    EndDate: str = Field(...)
    ReturnDate: str = Field(...)
    ReservationCost: float = Field(...)
    LateFee: float = Field(...)
    ChangeBranchFee: float = Field(...)
    GST: float = Field(...)
    TotalCost: float = Field(...)
    Status: str = Field(...)

    class config:
        allow_population_by_field_name = True
        #json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "ReservationID": "R0000000001",
                "CustomerID": "C0000000001",
                "CarType": "T1",
                "CarID": "CR0001",
                "BranchID": "B001",
                "StartDate": "01/01/2020",
                "EndDate": "01/02/2020",
                "ReturnDate": "01/02/2020",
                "ReservationCost": 50.00,
                "LateFee": 0.00,
                "ChangeBranchFee": 0.00,
                "GST": 5.00,
                "TotalCost": 100.00,
                "Status": "Active"
            }
        }