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
      const checkThis = result;
      //console.log(checkThis);
      setJson(checkThis);
    };
  };

  return (
    <>
      <div style={{ backgroundColor: "#dceef7", height: "100vh" }}>
        <div
          style={{
            fontSize: 40,
            color: "#204c63",
            paddingTop: "15px",
            paddingBottom: "5px",
            fontWeight: "800",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Abacus
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
              width: "40%",
              height: 240,
              backgroundColor: "#7b9aab",
              borderRadius: 5,
              boxShadow: 5,
              m: 2,
            }}
          >
            <div style={{ padding: "20px", marginTop: "20px" }}>
              <div
                style={{
                  paddingBottom: "10px",
                  fontSize: 24,
                  fontWeight: "800",
                  color: "#FFF",
                }}
              >
                Please upload csv
              </div>
              <div
                style={{
                  paddingTop: "20px",
                  paddingBottom: "10px",
                  color: "#FFF",
                }}
              >
                <input type="file" accept=".csv" onChange={onFileChange} />
                <button onClick={onFileUpload}>Upload!</button>
              </div>
              {json && (
                <Link to="Analytics" state={{ data: json }} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <div
                    style={{
                      marginTop: "10px",
                      padding: "10px",
                      border: "solid",
                      color: "#204c63",
                      fontWeight: "800",
                      borderRadius: "20px",
                      width: "90px",
                    }}
                  >
                    VISUALIZE
                  </div>
                </Link>
              )}
            </div>
          </Box>
        </div>
        <div
          style={{
            textAlign: "left",
            paddingTop: "55vh",
            color: "#656b6e",
            paddingLeft: "20px",
          }}
        >
          Disclaimer: Not Actual Financial Advice
        </div>
      </div>
    </>
  );
};

export default Dashboard;
