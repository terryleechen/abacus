import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const InOut = () => {
  const [moneyIn, setMoneyIn] = useState(0);
  const [moneyOut, setMoneyOut] = useState(0);

  const location = useLocation();
  const { data } = location.state;
  //console.log(data);

  var moneyInTemp = 0;
  var moneyOutTemp = 0;
  var graph = [];

  if (data) {
    for (let line of data) {
      console.log(line)
      var numTemp = parseInt(line.value);
      if (line.transaction === "credit") {
        moneyInTemp += numTemp;
      }
      if (line.transaction === "debit") {
        moneyOutTemp += numTemp;
      }
    }
    graph.push({ name: "Income", value: moneyInTemp });
    graph.push({ name: "Expenses", value: moneyOutTemp });
  }

  return (
    <>
      <div>InOut</div>
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
            height: 500,
            backgroundColor: "#FFF",
            borderRadius: 5,
            boxShadow: 5,
            m: 2,
          }}
        >
          {graph.length > 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "50px",
              }}
            >
              <BarChart width={400} height={250} data={graph}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </div>
          ) : null}

          <Link to="/">
            <div
              style={{
                marginTop: "40px",
                padding: "10px",
                border: "solid",
                borderRadius: "20px",
                width: "60px",
              }}
            >
              Back
            </div>
          </Link>
        </Box>
      </div>
    </>
  );
};

export default InOut;
