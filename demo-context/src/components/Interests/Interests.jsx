import { useState } from "react";
import data from "../data.json";
import { Container } from "reactstrap";
import Card from "../Card";
import { Button } from "@mui/material";
const Interests = () => {
  const [counter, setCounter] = useState(0);
  console.log("data => ", counter);
  return (
    <Container className="my-5">
      <Card {...data[counter]} />
      <div className="p-5 text-center">
       {counter!==0&& <Button variant="contained" onClick={()=>setCounter(counter-1)} className="mx-3" style={{background:"#AA0C7E"}}>Prev</Button>}
        {counter!==data.length-1&&<Button onClick={()=>setCounter(counter+1)} variant="contained" className="mx-3" style={{background:"#AA0C7E"}}>Next</Button>}
       {counter===data.length-1&& <Button variant="contained" className="mx-3" style={{background:"#AA0C7E"}}>Continue</Button>}
      </div>
    </Container>
  );
};

export default Interests;
