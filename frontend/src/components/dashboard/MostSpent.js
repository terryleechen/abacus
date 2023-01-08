import { useState, useEffect } from "react";
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

var dateChosen = "";

const MostSpent = ({data}) => {
    const [types, setTypes] = useState([]);
    const [month, setMonth] = useState("");
    const [dropDown, setDropDown] = useState([]);
    
    var graph = [];

    useEffect(() => {
    const options = [];
      for (let line of data){
        const date = line.date;
        const tempM = date.split("/")[0];
        const tempY = date.split("/")[2];
        const temp = `${tempM}/${tempY}`;
        if(options.includes(temp) !== true){
          options.push(temp);
        }
      }
      setDropDown(options)
    }, [data])

    const handleChange = (e) => {
      setMonth(e.target.value);
      //console.log(e.target.value);
      dateChosen = e.target.value;
    };

    const monthChosen = dateChosen.split("/")[0];
    for(let line of data){
      const date2 = line.date;
      const tempMonth = date2.split("/")[0];
      if (tempMonth === monthChosen){
        if(line.transaction === "debit"){
            types.some((type) => type.name === line.type) 
            ? types.find((type) => type.name === line.type).value += parseInt(line.value) 
            : types.push({name: line.type, value: parseInt(line.value)});
        }
      }
    }

    for(let type of types){
        graph.push({name: type.name, value: type.value});
    }

    //this.setState({types:[]}); have to set this type state to zero or else it keeps adding the same values again
    // see discord message for explaination

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
        }}>

        <BarChart width={1000} height={250} data={graph}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#204c63" />
        </BarChart>
        </div>
      )};

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
              {(dropDown.length > 0) && <div>
              <FormControl fullWidth>
              <InputLabel >Month</InputLabel>
              <Select
                value={month}
                label="month"
                onChange={handleChange}
              >
                {dropDown.map( (item) =>
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                  )}
              </Select>
            </FormControl>
            </div>}
            <div style={{
                  paddingTop: "20px",
                  paddingBottom: "10px",
                  fontSize: 24,
                  fontWeight: "800",
                  color: "#FFF"
                  }}>Category with Highest Spending</div>
            
            {month && createGraph()}

            </Box>
          </div>
        </>
      );
}
export default MostSpent