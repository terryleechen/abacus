import { useState, useEffect } from "react";
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
        graph.push({name: line.type, value: parseInt(line.value)});
    }

    return(
        <div>
            <BarChart width={400} height={250} data={graph}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
        </div>
    )
}
export default MostSpent