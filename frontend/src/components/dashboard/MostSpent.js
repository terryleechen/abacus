import { useState, useEffect } from "react";
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


const MostSpent = ({data}) => {
    const [types, setTypes] = useState([]);
    var graph = [];

    useEffect(() => {}, [data]);

    for(let line of data){
        if(line.transaction === "debit"){
            types.some((type) => type.name === line.type) 
            ? types.find((type) => type.name === line.type).value += parseInt(line.value) 
            : types.push({name: line.type, value: parseInt(line.value)});
        }
    }

    for(let type of types){
        graph.push({name: type.name, value: type.value});
    }


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
                  }}>Category with Highest Spending</div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: "100px",
                    paddingRight: "100px",
                    paddingTop: "50px",
        }}>

        <BarChart width={400} height={250} data={graph}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#204c63" />
        </BarChart>
        </div>
            </Box>

          </div>
        </>
      );
}
export default MostSpent