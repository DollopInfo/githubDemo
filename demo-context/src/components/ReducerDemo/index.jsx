import { useReducer } from "react";
const reducerFn = (state, action) => {
  switch (action.type) {
    case "increament":
      return { counter: state.counter + 1 };
    case "decreament":
      return { counter: state.counter - 1 };
  }
};
const ReducerDemo = () => {
  const initialState = {
    counter: 10,
  };
  const [state, dispatch] = useReducer(reducerFn, initialState);
  
  return (
    <>
      <button onClick={()=>dispatch({ type: "decreament" })}>-</button>
      <div>{state.counter}</div>
      <button onClick={()=>dispatch({ type: "increament" })}>+</button>
    </>
  );
};

export default ReducerDemo;
