import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const DailySpent = ({ data }) => {
  const [sixMonths, setSixMonths] = useState([]);

  var month1 = 0;
  var day = 0;
  var total = 0;

  var checker = false;
  var graph = [];

  if (data) {
    for (let line of data) {
      if (!checker) {
        if (line.date === "5/1/2022") {
          checker = true;
        }
      } else {
        //console.log(line);
        if (line.transaction === "debit") {
          var date = line.date.split("/");
          sixMonths.some((date) => date.day === line.date)
            ? (sixMonths.find((date) => date.day === line.date).month +=
                parseInt(line.value))
            : sixMonths.push({
                day: date[1],
                month: date[0],
                value: parseInt(line.value),
              });
        }
      }
    }
    console.log(sixMonths);
  }

  const createGraph = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="month1" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  };

  return (
    <></>
    // <>
    //   <div
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         width: "95%",
    //         height: 500,
    //         backgroundColor: "#FFF",
    //         borderRadius: 5,
    //         boxShadow: 5,
    //         m: 2,
    //       }}
    //     >
    //     <div style={{marginTop:"20px"}}>Daily Spent</div>

    //     </Box>
    //   </div>
    // </>
  );
};

export default DailySpent;
