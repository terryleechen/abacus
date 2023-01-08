import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import InOut from "./dashboard/InOut.js";

const Analytics = () => {

  const location = useLocation();
  const { data } = location.state;
  //console.log(data);

  return (
    <>
      <div>Analytics</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <InOut data={data}/>

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
        </div>
      </div>
    </>
  );
};

export default Analytics;
