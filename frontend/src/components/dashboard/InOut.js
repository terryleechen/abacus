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

const InOut = ({data}) => {
  const [moneyIn, setMoneyIn] = useState(0);
  const [moneyOut, setMoneyOut] = useState(0);
  const [year, setYear] = useState("");

  //console.log(data);

  useEffect(() => {

  }, [data])

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

  const handleChange = (e) => {
    setYear(e.target.value);
  };

  const createGraph = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "100px",
          paddingRight: "100px",
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
    );
  };

  return (
    <>
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
            backgroundColor: "#7b9aab",
            borderRadius: 5,
            boxShadow: 5,
            m: 2,
          }}
        >
        <div style={{
              paddingTop: "20px",
              paddingBottom: "10px",
              fontSize: 24,
              fontWeight: "800",
              color: "#FFF"
              }}>Monthly Cashflow</div>
        
          {graph.length > 0 ? createGraph() : null}
        </Box>
      </div>
    </>
  );
};

export default InOut;
