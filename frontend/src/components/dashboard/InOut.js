import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
  const [dropDown, setDropDown] = useState([]);
  const months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];

  //console.log(data);

  useEffect(() => {
    const options = [];
    for (let line of data){
      const date = line.date;
      const temp = date.substring(date.length - 4);
      if(options.includes(temp) !== true){
        options.push(temp);
      }
    }
    setDropDown(options)
  }, [data])

  
  var graph = [];

  if (data && year) {
    for(let i=1;i<13;i++){
      var moneyInTemp = 0;
      var moneyOutTemp = 0;
      for (let line of data) {
        const month = line.date.split('/')[0];
        const yearTemp = line.date.substring(line.date.length - 4);
        if(parseInt(month) === i && yearTemp === year){
          var numTemp = parseInt(line.value);
          if (line.transaction === "credit") {
            moneyInTemp += numTemp;
          }
          if (line.transaction === "debit") {
            moneyOutTemp += numTemp;
          }
        }
      }
      if(moneyInTemp > 0 || moneyOutTemp > 0){
        graph.push({ name: months[i-1], income: moneyInTemp, expense: moneyOutTemp});
      }
    }
    //console.log(graph)
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

        <BarChart width={800} height={250} data={graph}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#8884d8" />
          <Bar dataKey="expense" fill="#82ca9d" />
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
            p:5
          }}
        >
        {(dropDown.length > 0) && <div>
        <FormControl fullWidth>
        <InputLabel >Year</InputLabel>
        <Select
          value={year}
          label="Year"
          onChange={handleChange}
        >
          {dropDown.map( (item) =>
            <MenuItem key={item} value={item}>{item}</MenuItem>
            )}
        </Select>
      </FormControl>
        </div>}
        <div style={{marginTop:"20px"}}>Monthly Cashflow</div>

          {year && createGraph()}

        </Box>
      </div>
    </>
  );
};

export default InOut;
