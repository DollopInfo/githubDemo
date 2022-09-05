import { Button, Typography } from "@mui/material";
import { useState } from "react";

const Card = ({ title, imgs, option, col }) => {
  const [selected,setSeleted]=useState("")
  return (
    <div
      style={{
        backgroundImage: ` url(${imgs})`,
        minHeight: "400px",
        padding: "32px",
        backgroundColor: "#3c3c4c",
      }}
    >
      <div>
        <Typography
          variant="h6"
          style={{ textAlign: "center", marginBottom: "32px" }}
          fontWeight="bold"
          color="white"
        >
          {title}
        </Typography>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: col, gap: "20px" }}>
        {option.map((op, index) => (
          <Button variant={selected===op?"contained":"outlined"} onClick={()=>setSeleted(op)} style={{color:"#fff",fontWeight:"bold",border:"2px solid #fff"}}>{op}</Button>
        ))}
      </div>
    </div>
  );
};

export default Card;
