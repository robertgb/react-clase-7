import { createContext, useContext, useReducer } from "react";
import { counterInitialState, counterReducer } from "../reducers/countReducer";

const CountContext = createContext();
export const useCountContext = () => useContext(CountContext);

export const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState);

  const contextData = { state, dispatch, appName: 'NUCBA TODO' };

  return (
    <CountContext.Provider value={contextData}>
      {children}
    </CountContext.Provider>
  );
};
