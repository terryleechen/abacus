import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import axios from "axios";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [json, setJson] = useState(null);

  // On file select (from the pop up)
  const onFileChange = (e) => {
    var f = e.target.files;
    setFile(f[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    var csv = file,
      read = new FileReader();
    read.readAsBinaryString(csv);
    read.onloadend = function () {
      const data = read.result;

      var lines = data.split("\n");
      //console.log(lines)
      var result = [];
      const headers = ["date", "value", "transaction", "type"];

      for (var i = 0; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        //console.log(currentline)
        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }

        result.push(obj);
      }
      const checkThis = (result);
      //console.log(checkThis);
      setJson(checkThis);
    };
  };

  return (
    <>
      <div style={{
          fontSize: 20,
          color: "#204c63",
          paddingTop: "25px",
          paddingBottom: "10px"
        }}>
          Dashboard
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "95%",
            height: 300,
            backgroundColor: "#7b9aab",
            borderRadius: 5,
            boxShadow: 5,
            m: 2,
          }}
        >
          <div style={{ textAlign: "left", padding: "20px" }}>

            <div style={{ 
              paddingBottom: "20px",
              fontSize: 18,
              fontStyle: "bold",
              color: "#FFF"
            }}>Overview</div>

            <div style={{ padding: "2px", color: "#FFF"}}>Salary</div>
            <div style={{ padding: "2px", color: "#FFF"}}>Rent</div>
            <div style={{ padding: "2px", color: "#FFF"}}>Groceries</div>
            <div style={{ padding: "2px", color: "#FFF"}}>Utilities</div>
            <div style={{ padding: "2px", color: "#FFF"}}>Miscellaneous</div>
            <div style={{ paddingTop: "20px", paddingBottom: "10px" }}>
              <input type="file" accept=".csv" onChange={onFileChange} />
              <button onClick={onFileUpload}>Upload!</button>
            </div>
            {json && (
              <Link to="Analytics" state={{data: json}}>
                <div
                  style={{
                    marginTop: "40px",
                    padding: "10px",
                    border: "solid",
                    borderRadius: "20px",
                    width: "60px",
                  }}
                >
                  Analytics
                </div>
              </Link>
            )}
          </div>
        </Box>
      </div>
    </>
  );
};

export default Dashboard;
