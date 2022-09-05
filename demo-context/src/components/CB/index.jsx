import { useContext } from "react";
import userNameContext from "../../context/userContext";
import CA from "../CA";

const CB = () => {
  console.log("myContext => ", userNameContext);
  const value = useContext(userNameContext);
  console.log("value -> ", value);
  return <CA />;
};
export default CB;
