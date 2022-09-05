import { useContext, useState } from "react";
import userNameContext from "../../context/userContext";
const CA = () => {
  const { state, dispatch } = useContext(userNameContext);
  const [myName,setMyName]=useState("")
  return (
    <>
      <div> {state?.name}</div>
      <input value={myName} onInput={(e)=>setMyName(e.target.value)}/>
      <button onClick={() => dispatch({ type: "changename", name: myName })}>
        change name
      </button>
    </>
  );
};
export default CA;
