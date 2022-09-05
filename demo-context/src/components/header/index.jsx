import { useContext } from "react";
import userNameContext from "../../context/userContext";

const Header = () => {
  const { state } = useContext(userNameContext);
  return(<div>Your name is : {state?.name}</div>);
};

export default Header;
