import { createContext, useReducer } from "react";
import { ChangeName, Decreament } from "../../reduxFiles/actions";

const userNameContext = createContext();

const reducerFn = (state, action) => {
  switch (action.type) {
    case ChangeName:
      return {};
    case Decreament:
      return { counter: state.counter - 1 };
  }
};
const myFunction = () => {
  return {};
};
export const UserProvider = ({ children }) => {
  const initialState = { name: "nayan", age: 21 };
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <userNameContext.Provider value={{ state, dispatch }}>
      {children}
    </userNameContext.Provider>
  );
};

export default userNameContext;
